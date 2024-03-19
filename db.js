const { Pool } = require('pg');

const pool = new Pool({
    connectionString: "postgres://an:NyTvQgoVuXTQwZYLRUlxf24Bhb0HgOd7@dpg-cnst548l6cac73dcbt4g-a.oregon-postgres.render.com/node_postgres_gvsz"
});

module.exports = pool;





