const { Pool } = require('pg');

const PG_URI = 'postgres://iqpktutm:p7c8YSgfZXXxp9dUohyqPFi9qhUXiLnC@berry.db.elephantsql.com/iqpktutm';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};