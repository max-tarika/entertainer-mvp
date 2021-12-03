/* eslint-disable no-underscore-dangle */
const requestTicketmaster = require('../../helpers/ticketmaster.js');

module.exports = {
  get: (req, res) => {
    requestTicketmaster.getEvents(req.query)
      .then(({ data }) => {
        const results = data._embedded.events;
        const events = [];
        for (let i = 0; i < results.length; i += 1) {
          const result = results[i];
          const event = {
            event_id: result.id,
            name: result.name,
            image_url: result.images[0].url,
            segment: result.classifications[0].segment.name,
            time: result.dates.start.localTime,
            date: result.dates.start.localDate,
            venue: result._embedded.venues[0].name,
            city: result._embedded.venues[0].city.name,
            state: result._embedded.venues[0].state.stateCode,
            price_min: result.priceRanges[0].min,
            price_max: result.priceRanges[0].max,
          };

          events.push(event);
        }
        res.status(200).send(events);
      })
      .catch((err) => res.status(404).send(err));
  },
};
