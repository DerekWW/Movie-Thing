'use strict';

/* eslint-disable new-cap, no-console, max-len*/

const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { decamelizeKeys } = require('humps');

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

router.get('/api/friends', authorize, (req, res, next) => {
  const userId = req.token.userId;

  knex('friends')
    .select('followed_id')
    .where('follower_id', userId)
    .then((followedIds) => {
      const idArray = [];

      for (const id of followedIds) {
        idArray.push(id.followed_id);
      }

      return knex('users').select('first_name', 'last_name', 'id').whereIn('id', idArray);
    })
    .then((friendsList) => {
      res.send(friendsList);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/api/friends', authorize, (req, res, next) => {
  const followerId = req.token.userId;
  const followedId = req.body.userId;
  const friends = { followerId, followedId };

  knex('friends')
    .where('follower_id', followerId)
    .andWhere('followed_id', followedId)
    .first()
    .then((rows) => {
      console.log(rows);
      if (rows) {
        throw boom.create(400, 'User is already following this account!');
      }

      return knex('friends').insert(decamelizeKeys(friends), '*');
    })
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/api/friends/check', authorize, (req, res, _next) => {
  const followerId = req.token.userId;
  const followedId = req.body.userId;

  knex('friends')
    .where('follower_id', followerId)
    .andWhere('followed_id', followedId)
    .first()
    .then((row) => {
      if (!row) {
        res.send(false);
      }
      res.send(true);
    });
});

router.delete('/api/friends', authorize, (req, res, next) => {
  const userId = req.token.userId;
  const friendId = req.body.friendId;

  console.log(friendId);

  knex('friends')
    .where('follower_id', userId)
    .andWhere('followed_id', friendId)
    .del()
    .then((row) => {
      res.send(row);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
