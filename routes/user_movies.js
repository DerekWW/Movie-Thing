'use strict';

/* eslint-disable new-cap, no-console*/

const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { decamelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
const router = express.Router();

const authorize = function(req, res, next) {
  const token = req.cookies.token;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(boom.create(401, 'Unauthorized'));
    }

    req.token = decoded;

    next();
  });
};

router.get('/api/user_movies/user', authorize, (req, res, next) => {
  knex('movies')
  .innerJoin('user_movies', 'movies.movie_id', 'user_movies.movie_id')
  .where('user_movies.user_id', req.token.userId)
  .then((list) => {
    res.send(list);
  })
  .catch((err) => {
    next(err);
  });
});

router.get('/api/user_movies/friends', authorize, (req, res, next) => {
  const subquery = knex('friends')
  .select('followed_id')
  .where('follower_id', req.token.userId);

  knex('movies')
  .innerJoin('user_movies', 'movies.movie_id', 'user_movies.movie_id')
  .whereIn('user_movies.user_id', subquery)
  .then((list) => {
    console.log(list);
    res.send(list);
  })
  .catch((err) => {
    next(err);
  });
});

router.get('/api/user_movies/friendsMovies', authorize, (req, res, next) => {

knex.raw(`select users.id, users.first_name, users.last_name, movies.movie_title, movies.movie_rating, movies.movie_poster, movies.movie_overview, movies.embed_link  from users inner join friends on friends.followed_id = users.id inner join user_movies on user_movies.user_id = users.id inner join movies on movies.movie_id = user_movies.movie_id where friends.follower_id = ${req.token.userId}`)
.then((response) => {
  console.log(response.rows);
  res.send(response.rows)
})

})

router.get('/api/user_movies/friendsList', authorize, (req, res, next) => {
  knex('friends')
  .select('followed_id')
  .where('follower_id', req.token.userId)
  .then((list) => {
    console.log(list);
    res.send(list);
  })
  .catch((err) => {
    next(err);
  });
});

router.post('/api/user_movies', authorize, (req, res, _next) => {
  const movie = req.body;

  console.log(movie);
  const response = {};

  knex('movies')
  .where('movie_id', movie.id)
  .first()
  .then((rows) => {
    if (rows) {
      return;
    }

    const addMovie = {
      movieId: movie.id,
      movieRating: movie.rating,
      movieTitle: movie.title,
      moviePoster: movie.poster,
      movieOverview: movie.overview
    };

    return knex('movies').insert(decamelizeKeys(addMovie), '*');
  })
  .then((row) => {
    response.movie = row;

    return knex('user_movies')
    .where('user_id', req.token.userId)
    .andWhere('movie_id', movie.id)
    .first();
  })
  .then((exists) => {
    if (exists) {
      return;
    }

    const addUserMovie = {
      userId: req.token.userId,
      movieId: movie.id
    };

    return knex('user_movies').insert(decamelizeKeys(addUserMovie));
  })
  .then((row) => {
    response.user = row;
    res.send(response);
  })
  .catch((err) => {
    console.log(err);
  });
});

router.delete('/api/user_movies', authorize, (req, res) => {
  const id = req.body.movieId;

  knex('user_movies')
  .where('user_id', req.token.userId)
  .andWhere('movie_id', id)
  .del()
  .then(() => {
    res.send();
  })
  .catch((err) => {
    console.log(err);
  });
});

module.exports = router;
