const getEvents = require('../../helpers/ticketmaster.js');

module.exports = {
  get: (req, res) => {
    console.log('events get request: ', req);
    res.send();
  },
};
