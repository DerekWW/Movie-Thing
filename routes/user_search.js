'use strict';

const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { camelizeKeys } = require('humps');

/* eslint-disable new-cap, no-console*/

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

router.get('/api/user_search', authorize, (req, res, next) => {
  knex.select('first_name', 'last_name', 'id', 'username')
  .from('users')
  .then((exists) => {
    if (!exists) {
      throw boom.create(400, 'No such user found');
    }

    const user = camelizeKeys(exists);

    res.send(user);
  })
  .catch((err) => {
    console.error(err);
    next(err);
  });
});

module.exports = router;
