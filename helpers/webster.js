const axios = require('axios');
const config = require('../config.js');

let getDefByWord = (word) => {
  //The axios module is used to request def for a specific word from the webster API
  console.log('getDefByWord', word)
  let options = {
    url: `https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${config.TOKEN}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `${config.TOKEN}`
    }
  };
  return axios.get(options.url, options.headers)
    .then(res => {
      console.log('RES', res)
      return res.data;
    })
    .catch(err => {
      console.log('axios err', err)
    })
}

module.exports.getDefByWord = getDefByWord;

//, options.headers
//`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${config.TOKEN}`,
//`https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${config.TOKEN}`,