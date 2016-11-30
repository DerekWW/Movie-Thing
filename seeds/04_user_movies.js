/* eslint-disable max-len, camelcase */

'use strict';

exports.seed = function(knex) {
  return knex('user_movies').del()
    .then(() => {
      return knex('user_movies').insert([{
        id: 1,
        user_id: 1,
        movie_id: 50362
      }, {
        id: 2,
        user_id: 2,
        movie_id: 50363
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('user_movies_id_seq', (SELECT MAX(id) FROM user_movies));"
      );
    });
};
