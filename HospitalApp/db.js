const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Hospital",
    password: "user1234",
    port: 5432,
});

module.exports = pool;