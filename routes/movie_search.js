'use strict';

const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');
const axios =require('axios');


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

router.get('/api/movie_search/title/:movieSearch', (req, res, next) => {
  const movie = req.params.movieSearch;

 axios.get(`https://api-public.guidebox.com/v1.43/US/rKZKTP9f7YPjtoVHxBVqJdHm1KwRoO69/search/movie/title/${movie}/fuzzy`)
  .then((searchResponse)=> {
    const movies = searchResponse.data.results;

    res.send(movies);
  })
  .catch((err) => {
    next(err);
  })

})

router.get('/api/movie_search/id/:id', (req, res, next) => {
  const id = req.params.id;

 axios.get(`https://api-public.guidebox.com/v1.43/US/rKZKTP9f7YPjtoVHxBVqJdHm1KwRoO69/movie/${id}`)
  .then((searchResponse)=> {
    const movie = searchResponse.data;
    console.log(movie);

    res.send(movie);
  })
  .catch((err) => {
    next(err);
  })

})





module.exports = router;
