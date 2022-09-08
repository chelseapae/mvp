const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dictionary', { useNewUrlParser: true, useUnifiedTopology: true });


let dictSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  word: String,
  definition: String,
  synonyms: String
});

let Dict = mongoose.model('Dict', dictSchema);

let save = (word) => {
  let newWord = new Word({
    id: word.id,
    word: word.word,
    definition: word.definition,
    synonyms: word.synonyms
  });
  return newWord.save();
}

module.exports.save = save;