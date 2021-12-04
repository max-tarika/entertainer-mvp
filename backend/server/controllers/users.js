const pool = require('../../db/index');

module.exports = {
  get: (req, res) => {
    const sql = `SELECT
      first_name,
      last_name,
      username,
      (SELECT
        coalesce(json_agg(events), '[]'::json)
          as events FROM (
            SELECT
              name,
              time,
              date,
              city,
              state
            FROM events WHERE events.user_id = users.id
          ) AS events)
      FROM users;`;

    pool.query(sql)
      .then(({ rows }) => res.status(200).send(rows))
      .catch((err) => res.status(400).send(err));
  },

  post: (req, res) => {
    const firstName = req.body.newUser.first_name || 'anonymous';
    const lastName = req.body.newUser.last_name || 'user';
    const username = req.body.newUser.username || 'Dr. Anon';
    const sql = 'INSERT INTO users (first_name, last_name, username) VALUES ($1, $2, $3)';
    const values = [firstName, lastName, username];

    pool.query(sql, values)
      .then(() => res.status(201).end())
      .catch((err) => res.status(400).send(err));
  },
};

// const sql = `SELECT
//       first_name,
//       last_name,
//       username,
//       (SELECT
//         array(
//           SELECT json_build_object(
//             'name', name,
//             'time', time,
//             'date', date,
//             'city', city,
//             'state', state,
//           ) FROM events WHERE events.user_id = users.id
//         ) AS events)
//       FROM users;`;

//     pool.query(sql)
//       .then(({ rows }) => res.status(200).send(rows))
//       .catch((err) => res.status(400).send(err));
