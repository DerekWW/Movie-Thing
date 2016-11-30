'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('user_movies', (table) => {
    table.increments();
    table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE').index();
    table.integer('movie_id').notNullable().references('movie_id').inTable('movies').onDelete('CASCADE').index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_movies');
};
