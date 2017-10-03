var express = require('express')
var knex = require('../db/knex')
var router = express.Router()
var cors = require('cors')
var bodyParser = require('body-parser')

router.use(cors())
router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

router.get('/', function (req, res) {
  knex('movies')
    .then((movies) => {
      res.json(movies)
    })
})

router.get('/:id', (req, res) => {
  let id = req.params.id
  knex('movies')
    .where('id', id)
    .then((movies) => {
      res.json(movies)
    })
})

router.post('/', (req, res) => {
  let post = req.body
  console.log(post)
  knex('movies')
  .insert(post)
  .returning('*')
  .then((movie) => {
    console.log(movie)
    res.json(movies)
  })
})

router.put('/:id', (req, res) => {
  let id = req.params.id
  let edit = req.body
  knex('movies').where('id', id)
  .update(edit)
  .returning('*')
  .then(edited => {
    res.json(edited)
  })
})

router.delete('/:id', (req, res) => {
  let id = req.params.id
  knex('movies')
    .where('id', id).del().returning("*")
    .then(deleted => {
      res.json({deleted})
  })

})


module.exports = router
