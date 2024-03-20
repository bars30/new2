const { Pool } = require('pg');

const pool = new Pool({

    postgres:"//an:NyTvQgoVuXTQwZYLRUlxf24Bhb0HgOd7@dpg-cnst548l6cac73dcbt4g-a/node_postgres_gvsz"
   });

module.exports = pool;



