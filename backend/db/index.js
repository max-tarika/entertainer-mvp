const { Pool } = require('pg');

const config = {
  host: 'localhost',
  port: 5432,
  database: 'mvp_entertainer',
  user: 'MaxTarika',
};

const pool = new Pool(config);

module.exports = pool;
