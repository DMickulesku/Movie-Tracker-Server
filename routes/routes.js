var express = require('express')
var knex = require('../db/knex')
var router = express.Router()

router.get('/', function (req, res) {
  knex('movies')
    .then(movies => {
      res.json(movies)
    })
})

module.exports = router
