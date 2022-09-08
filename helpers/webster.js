const axios = require('axios');
const config = require('../config.js');

let getDefByWord = (word) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  console.log('getDefByWord', word)
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
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