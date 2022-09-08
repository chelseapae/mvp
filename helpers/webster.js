const axios = require('axios');
const config = require('../config.js');

let getDefByWord = (word) => {
  //The axios module is used to request def for a specific word from the webster API
  console.log('getDefByWord', word)
  let options = {
    url: `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=d193d950-efdd-4dd1-9e8d-42f260aaf28d`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  return axios.get(options.url, options.headers)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log('axios err', err)
    })
}

module.exports.getDefByWord = getDefByWord;