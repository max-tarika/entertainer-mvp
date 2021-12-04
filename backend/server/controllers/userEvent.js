const pool = require('../../db/index');

module.exports = {
  post: (req, res) => {
    const name = req.body.events.name || null;
    const imageUrl = req.body.events.image_url || 'https://unsplash.com/photos/B0s3Xndk6tw';
    const segment = req.body.events.segment || null;
    const time = req.body.events.time || null;
    const date = req.body.events.date || null;
    const venue = req.body.events.venue || null;
    const city = req.body.events.city || null;
    const state = req.body.events.state || null;
    const priceMin = req.body.events.price_min || null;
    const priceMax = req.body.events.price_max || null;
    const ticketUrl = req.body.events.ticket_url || null;

    const sql = `INSERT INTO events
    (user_id, event_id, name, image_url, segment, time, date, venue, city, state, price_min, price_max, ticket_url)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`;
    const values = [
      name,
      imageUrl,
      segment,
      time,
      date,
      venue,
      city,
      state,
      priceMin,
      priceMax,
      ticketUrl,
    ];

    pool.query(sql, values)
      .then(() => res.status(201).end())
      .catch((err) => res.status(400).send(err));
  },
};
