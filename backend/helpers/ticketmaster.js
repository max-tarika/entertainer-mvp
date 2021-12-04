const axios = require('axios');
const { TOKEN } = require('../../config.js');

const apiURL = `https://app.ticketmaster.com/discovery/v2/events.json?&apikey=${TOKEN}`;

const segmentIds = {
  All: '',
  'Arts & Theatre': 'KZFzniwnSyZfZ7v7na',
  Music: 'KZFzniwnSyZfZ7v7nJ',
  Sports: 'KZFzniwnSyZfZ7v7nE',
  Miscellaneous: 'KZFzniwnSyZfZ7v7n1',
  Film: 'KZFzniwnSyZfZ7v7nn',
  Donation: 'KZAyXgnZfZ7vAvv',
};

const getEvents = ({ searchCategory }) => {
  const parameters = {
    marketId: 6,
    classificationId: segmentIds[searchCategory],
  };

  return new Promise((resolve, reject) => {
    axios.get(apiURL, { params: parameters })
      .then((events) => resolve(events))
      .catch(reject);
  });
};

module.exports.getEvents = getEvents;
