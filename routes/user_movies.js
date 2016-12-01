'use strict';

const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

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
  .innerJoin('user_movies','movies.movie_id', 'user_movies.movie_id')
  .where('user_movies.user_id', req.token.userId)
  .then((list) => {
    res.send(list);
  })
  .catch((err) => {
    next(err)
  })


})

router.get('/api/user_movies/friends', authorize, (req, res, next) => {

  const subquery = knex('friends')
  .select('followed_id')
  .where('follower_id', req.token.userId);

  knex('movies')
  .innerJoin('user_movies','movies.movie_id', 'user_movies.movie_id')
  .whereIn('user_movies.user_id', subquery)
  .then((list) => {
    res.send(list);
  })
  .catch((err) => {
    next(err)
  })


})

router.post('/api/user_movies', authorize, (req, res, next) => {
  const movie = req.body;
  console.log(movie);
  let response = {};

  knex('movies')
  .where('movie_id', movie.id)
  .first()
  .then(rows => {
    if (rows) {
      return
    }

    let addMovie = {
      movieId: movie.id,
      movieRating: movie.rating,
      movieTitle: movie.title,
      moviePoster: movie.poster,
      movieOverview: movie.overview,
    }

    return knex('movies').insert(decamelizeKeys(addMovie), '*');
  })
  .then(row => {
    response.movie = row;

    return knex('user_movies')
    .where('user_id', req.token.userId)
    .andWhere('movie_id', movie.id)
    .first()
  })
  .then((exists) => {
    if (exists) {
      return
    }

    const addUserMovie = {
      userId: req.token.userId,
      movieId: movie.id
    };

    return knex('user_movies').insert(decamelizeKeys(addUserMovie));
  })
  .then(row => {
    response.user = row;
    res.send(response);
  })
  .catch(err => {
    next(err)
  })

});

  router.delete('/api/user_movies', authorize, (req, res) => {
    let id = req.body.movieId;

    knex('user_movies')
    .where('user_id', req.token.userId)
    .andWhere('movie_id', id)
    .del()
    .then(row => {
      res.send()
    })
    .catch((err) => {
      console.log(err);
    })

  })


  module.exports = router;
