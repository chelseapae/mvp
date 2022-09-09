const express = require('express');
let app = express();
const { getDefByWord } = require('../helpers/webster.js');
const { save } = require('../database/index.js')
const { getDef } = require('../database/index.js')

// var path = require('path')

app.use(express.static(__dirname + '/../client/dist'));

app.use(express.urlencoded({ extended: false }))

app.post('/', function (req, res) {
  // This route takes the word provided and gets the definiton from the webster API, then saves to the DB
  console.log('POSTREQ', req.body.word)
  getDefByWord(req.body.word)
    .then (data => {
      console.log('DATAAA', data[0].meta.shortdef)
      save(data)
      res.status(201).send('App.Post Successfully saved to DB');
    })
    .catch (() => {
      res.status(404).send('Word not found!')
    })
});

app.get('/', function (req, res) {
  // This route should send back the definition
  getDef()
    .then(data => {
      console.log('DEFINITION', data)
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

