const axios = require('axios');
const apiURL = `https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=${process.env.TOKEN}`;

const getEvents = (options) => {
  console.log('Getting events with: ', options);
};

module.exports.getEvents = getEvents;
