const pool = require('../../db/index');

module.exports = {
  post: (req, res) => {
    const userId = Number(req.body.currentUser);
    const eventId = req.body.event.event_id;
    const name = req.body.event.name || null;
    const imageUrl = req.body.event.image_url || 'https://unsplash.com/photos/B0s3Xndk6tw';
    const segment = req.body.event.segment || null;
    const time = req.body.event.time || null;
    const date = req.body.event.date || null;
    const venue = req.body.event.venue || null;
    const city = req.body.event.city || null;
    const state = req.body.event.state || null;
    const priceMin = req.body.event.price_min || null;
    const priceMax = req.body.event.price_max || null;
    const ticketUrl = req.body.event.ticket_url || null;

    const sql = `INSERT INTO events
    (id, user_id, event_id, name, image_url, segment, time, date, venue, city, state, price_min, price_max, ticket_url)
    VALUES
    (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`;
    const values = [
      userId,
      eventId,
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
