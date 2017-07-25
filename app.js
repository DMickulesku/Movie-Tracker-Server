var express = require('express')
var app = express()
var port = process.env.PORT || 3000
var router = require('./routes/routes')
var cors = require('cors')

app.use(cors())

app.use('/movies', router)

app.listen(port, function () {
  console.log('listening on port', port);
})
