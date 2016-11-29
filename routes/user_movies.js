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

router.post('/api/user_movies', authorize, (req, res, next) => {
   { movie } = req.body;
  knex('saved')
    .where('user_id', req.token.userId)
    .andWhere('movie_id', movie.id)
    .first()
    .then((exists) => {
      if (exists) {
        throw boom.create(400, 'Movie already saved by user!');
      }

      

    })
    .then()
    .catch((err) => {
      console.error(err);
      next(err)
    });
})

router.get('/api/user_movies', authorize, (req, res, next) => {

  knex('saved')
    .where('user_id', req.token.userId)

    .then((movies) => {
      res.send(movies)
    })
    .catch((err) => {
      console.error(err);
      next(err)
    });
})

module.exports = router;
