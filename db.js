const Pool = require('pg').Pool
const pool = new Pool({
 user: "an",
 password: 'nrv47#n58',
 host: "dpg-cnst548l6cac73dcbt4g-a",
 port: 5432,
 database: "node_postgres_gvsz",
 postgres: "//an:NyTvQgoVuXTQwZYLRUlxf24Bhb0HgOd7@dpg-cnst548l6cac73dcbt4g-a/node_postgres_gvsz"
})

module.exports = pool