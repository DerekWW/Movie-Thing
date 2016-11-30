'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('friends', (table) => {
    table.increments();
    table.integer('follower_id').notNullable().references('id').inTable('users').onDelete('CASCADE').index();
    table.integer('followed_id').notNullable().references('id').inTable('users').onDelete('CASCADE').index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('friends');
};
