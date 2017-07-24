var express = require('express')
var app = express()
var port = process.env.PORT || 3000

const env = 'development';
const config = require('./knexfile') [env];
const knex = require(knex)(config);


app.use(function (req, res) {
  res.send('connected')
})

app.listen(port, function () {
  console.log('listening on port', port);
})
