var express = require('express')
var knex = require('../db/knex')
var router = express.Router()

router.get('/', function (req, res) {
  knex('movies')
    .then(movies => {
      res.json(movies)
    })
})

router.get('/:id', (req, res) => {
  let id = req.params.id
  knex('movies')
    .where('id', id)
    .then(movies => {
      res.json(movies)
    })
})

router.post('/', (req, res) => {
  let post = req.body;
  knex('movies').insert(post)
  .returning('*')
  .then(movies)
    res.json(movies)

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
    .where('id', id).del()
    .then(deleted => {
      res.json({message: 'Movie Deleted!'
    })
  })

})


module.exports = router
