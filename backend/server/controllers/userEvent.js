const pool = require('../../db/index');

module.exports = {
  post: (req, res) => {
    console.log('user post request: ', req);
    res.send();
  },
};
