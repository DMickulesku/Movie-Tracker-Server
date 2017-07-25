var express = require('express')
var app = express()
var port = process.env.PORT || 3000



app.use('/', function (req, res) {
  res.send('connected')
})

app.listen(port, function () {
  console.log('listening on port', port);
})
