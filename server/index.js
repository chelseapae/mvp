const express = require('express');
let app = express();
const { save } = require('../database/index.js')
const { getMood } = require('../database/index.js')

// var path = require('path')

app.use(express.static(__dirname + '/../client/dist'));

app.use(express.urlencoded({ extended: false }))

app.post('/', function (req, res) {
  // console.log('POSTREQ', req.body.mood)
  getDefByWord(req.body.mood)
    .then (data => {
      // console.log('DATAAA', data[0].meta.shortdef)
      save(data)
      res.status(201).send('App.Post Successfully saved to DB');
    })
    .catch (() => {
      res.status(404).send('Error!!')
    })
});

app.get('/', function (req, res) {
  getMood()
    .then(data => {
      // console.log('DATAMOOD', data)
      res.status(201).send(data)
    })
    .catch(() => {
      res.status(404).send('Something went wrong')
    })

});

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

