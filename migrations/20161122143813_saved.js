'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('saved', (table) => {
    table.increments();
    table.integer('movie_id').notNullable();
    table.string('movie_rating').notNullable().defaultTo('');
    table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE').index();
    table.string('movie_title').notNullable().defaultTo('');
    table.string('movie_poster').notNullable().defaultTo('');
    table.string('movie_overview', [1200]).notNullable().defaultTo('Overview Not Avaliable');
    table.string('embed_link', [320]).notNullable().defaultTo('Preview Not Avaliable');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('favorites');
};