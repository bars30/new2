
// const {Client} = require('pg')

// const client = new Client({
//   host: "ep-polished-art-a4hlxqfe-pooler.us-east-1.aws.neon.tech",
//   user: "default", 
//   port: 5432,
//   password: "4vjLwxg5pdJV",
//   database: "verceldb",
//   ssl: {
//     rejectUnauthorized: false, // You might need this for self-signed certificates
//     sslmode: 'require' // Ensure SSL is required
// }
// })

// client.connect()

// client.query(`SELECT * FROM person`, (err, res)=>{
//   if(!err){
//     console.log(res.rows);
//   } else {
//     console.log(err.message);
//   }
//   client.end()
// } )

// module.exports = client

const { Client } = require('pg');

function getClient() {
    const client = new Client({
        host: "ep-polished-art-a4hlxqfe-pooler.us-east-1.aws.neon.tech",
        user: "default",
        port: 5432,
        password: "4vjLwxg5pdJV",
        database: "verceldb",
        ssl: {
            rejectUnauthorized: false, // You might need this for self-signed certificates
            sslmode: 'require' // Ensure SSL is required
        }
    });

    return client;
}

module.exports = {
    getClient
};
