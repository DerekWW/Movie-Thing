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

router.get('/api/friends', authorize, (req, res, next) => {
  const userId = req.token.userId;

  knex('friends')
    .select('followed_id')
    .where('follower_id', userId)
    .then((followedIds) => {
      let idArray = [];

      for (let id of followedIds) {
        idArray.push(id.followed_id)
      }

      return knex('users').select('first_name', 'last_name', 'id').whereIn('id', idArray)
    })
    .then((friendsList) => {
      res.send(friendsList)
    })
    .catch((err) => {
      next(err)
    })
})

router.post('/api/friends', authorize, (req, res, next) => {
  const followerId = req.token.userId;
  const  followedId = req.body.userId;
  const friends = { followerId, followedId }

  console.log(friends);

  knex('friends')
    .insert(decamelizeKeys(friends), '*')
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      next(err)
    })

});

router.delete('/api/friends/:friendId', authorize, (req, res, next) => {
  const userId = req.token.userId;
  const friendId = req.params.friendId;

  knex('friends')
    .where('follower_id', userId)
    .andWhere('followed_id', friendId)
    .del()
    .then((row) => {
      res.send(row)
    })
    .catch((err) =>{
      next(err)
    })

})

module.exports = router;
