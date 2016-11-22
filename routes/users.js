const boom = require('boom');
const express = require('express');
// const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');
const axios = require('axios');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/api/home', (req, res, next) => {
  console.log('Test good');
});

module.exports = router;
