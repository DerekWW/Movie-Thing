'use strict';

/* eslint-disable new-cap, no-console, prefer-rest-params*/

const express = require('express');
const axios = require('axios');

const router = express.Router();

router.post('/api/movie_search/title', (req, res, _next) => {
  const { movieSearch } = req.body;

  axios.get(`https://api-public.guidebox.com/v1.43/US/rKZKTP9f7YPjtoVHxBVqJdHm1KwRoO69/search/movie/title/${movieSearch}/fuzzy`)
  .then((searchResponse) => {
    return searchResponse.data.results;
  })
  .then((movies) => {
    return movies.map((movie) => {
      return movie.id;
    });
  })
    .then((ids) => {
      const requests = ids.map((id) => {
        return axios.get(`https://api-public.guidebox.com/v1.43/US/rKZKTP9f7YPjtoVHxBVqJdHm1KwRoO69/movie/${id}`);
      });

      return axios.all(requests);
    })
      .then(axios.spread(function() {
        const args = [...arguments];

        const response = args.map((movie) => {
          return movie.data;
        });

        res.send(response);
      }))
      .catch((err) => {
        console.error(err);
      });
});

router.post('/api/movie_search/id', (req, res, next) => {
  const id = req.body.id;

  axios.get(`https://api-public.guidebox.com/v1.43/US/rKZKTP9f7YPjtoVHxBVqJdHm1KwRoO69/movie/${id}`)
  .then((searchResponse) => {
    const movie = searchResponse.data;

    console.log(movie);
    res.send(movie);
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
