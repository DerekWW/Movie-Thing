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

let moviesFull = [];

router.post('/api/movie_search/title', (req, res, next) => {

  const { movieSearch } = req.body;
  let movies;
  let ids;

 axios.get(`https://api-public.guidebox.com/v1.43/US/rKZKTP9f7YPjtoVHxBVqJdHm1KwRoO69/search/movie/title/${movieSearch}/fuzzy`)
  .then(searchResponse => {

    return searchResponse.data.results;
  })
  .then(movies =>{
    return movies.map(movie => {
      return movie.id;
       })
     })
    .then(ids => {
      const requests = ids.map(id => {
        return axios.get(`https://api-public.guidebox.com/v1.43/US/rKZKTP9f7YPjtoVHxBVqJdHm1KwRoO69/movie/${id}`)
      })

      return axios.all(requests)
    })
      .then(axios.spread(function(){

        let args = [...arguments];

        let response = args.map((movie) => {
          return movie.data
        })

        res.send(response)
      }))
      .catch((err) => {
        console.error(err);
      })
})





router.post('/api/movie_search/id', (req, res, next) => {
  const id = req.body.id;

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
