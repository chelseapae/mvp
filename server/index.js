const express = require('express');
let app = express();

var path = require('path')
let port = 1128;


app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.use(express.urlencoded({ extended: false }))

app.get('/', function(req, res) {
  res.send("Welcome to the homepage");
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
