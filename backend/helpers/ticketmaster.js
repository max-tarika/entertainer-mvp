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

const marketIds = {
  Atlanta: '10',
  Boston: '11',
  Denver: '6',
  'Las Vegas': '14',
  'Los Angeles': '27',
  'New York': '35',
  Saskatchewan: '112',
};

const getEvents = ({ location, segment }) => {
  console.log(location, segment);

  const options = {
    marketId: marketIds[location],
    classificationId: segmentIds[segment],
  };

  return new Promise((resolve, reject) => {
    axios.get(apiURL, { params: options })
      .then((events) => resolve(events))
      .catch(reject);
  });
};

module.exports.getEvents = getEvents;
