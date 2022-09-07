const express = require('express');
let app = express();

var path = require('path')


app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

//this code is IMPORTANT to render the right info. Middleware
app.use(express.urlencoded({ extended: false }))

app.get('/', function(req, res) {
  res.send("Hello world");
});


let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
