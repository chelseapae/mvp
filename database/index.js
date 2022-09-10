const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mood', { useNewUrlParser: true, useUnifiedTopology: true });


let dictSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  mood: String,
  date: String
});

let Mood = mongoose.model('Mood', moodSchema);

let save = (mood) => {
  let newMood = new Mood({
    id: mood.id,
    mood: mood.moood,
    date: mood.date
  });
  return newMood.save();
}

module.exports.save = save;
