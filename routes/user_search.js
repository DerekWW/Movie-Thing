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

router.get('/api/user_search', (req, res, next) => {
let { firstName, lastName, username } = req.body;

  

  if(firstName) {
    firstName = firstName.toLowerCase();

    knex.select('first_name', 'last_name', 'id')
      .from('users')
      .where('first_name', firstName)
      .then((exists) => {
        if (!exists) {
          throw boom.create(400, 'No such user found');
        }

        const users = camelizeKeys(exists)

        res.send(users);

      })
      .catch((err) => {
        console.error(err);
        next(err)
      })

  }else if (lastName) {
    lastName = lastName.toLowerCase();

    knex.select('first_name', 'last_name', 'id')
      .from('users')
      .where('last_name', lastName)
      .then((exists) => {
        if (!exists) {
          throw boom.create(400, 'No such user found');
        }

        const users = camelizeKeys(exists)

        res.send(users);

      })
      .catch((err) => {
        console.error(err);
        next(err)
      })

  }else if (email) {
    email = email.toLowerCase();

    knex.select('first_name', 'last_name', 'id')
      .from('users')
      .where('username', username)
      .then((exists) => {
        if (!exists) {
          throw boom.create(400, 'No such user found');
        }

        const users = camelizeKeys(exists)

        res.send(users);

      })
      .catch((err) => {
        console.error(err);
        next(err)
      })
  } else {
    return next(boom.create(400, 'Must have at least one of the following: first name, last name, or email.'))

  }

});

module.exports = router;
