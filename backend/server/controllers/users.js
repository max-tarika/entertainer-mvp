const pool = require('../../db/index');

module.exports = {
  get: (req, res) => {
    console.log('user get request: ', req);
    res.send();
  },

  post: (req, res) => {
    console.log('user post request: ', req);
    res.send();
  },
};
