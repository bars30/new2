const express = require('express');
const db = require('./db');
const app = express();
const PORT = 5050;

const dotenv = require('dotenv')
dotenv.config({ path: './config.evn' })

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from all origins
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE'); // Allow specific HTTP methods
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
    next();
  });


app.get('/', (req, res) => {
    res.status(200).send("This is from root");
});

app.get('/api/users', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const result = await client.query('SELECT * FROM person');
        res.json({ message: 'Data retrieval successful', users: result.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});

app.post('/api/user', async (req, res) => {
    // Your POST route logic here
});

app.get('/table', async (req, res) => {
    // Your create table route logic here
});


app.get('/api/bestselledwatches', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const result = await client.query('SELECT * FROM bestselledwatches');
        res.json({ message: 'Data retrieval successful', watches: result.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});

// app.get('/rolex/datejust', async (req, res) => {
//     const client = db.getClient(); // Get client instance
//     try {
//         await client.connect(); // Connect to the database
//         const result = await client.query('SELECT * FROM rolexcolldatejust');
//         res.json({ message: 'Data retrieval successful', watches: result.rows });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     } finally {
//         await client.end(); // Close the connection
//     }
// });
app.get('/rolex/coll/datejust', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const result = await client.query(`SELECT * FROM  rolexcollections where id = '1'`);
        const cont = await client.query('SELECT * FROM rolexcolldatejust');
        res.json({ message: 'Data retrieval successful', watches: result.rows, cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});
app.get('/rolex/coll/submariner', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const result = await client.query(`SELECT * FROM  rolexcollections where id = '2'`);
        const cont = await client.query('SELECT * FROM rolexcollsubmariner');
        res.json({ message: 'Data retrieval successful', watches: result.rows, cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});
app.get('/rolex/coll/gmtmasterll', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const result = await client.query(`SELECT * FROM  rolexcollections where id = '3'`);
        const cont = await client.query('SELECT * FROM rolexcollgmtmaster');
        res.json({ message: 'Data retrieval successful', watches: result.rows, cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});

app.get('/rolex/coll/daydate', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const result = await client.query(`SELECT * FROM  rolexcollections where id = '4'`);
        const cont = await client.query('SELECT * FROM rolexcolldaydate');
        res.json({ message: 'Data retrieval successful', watches: result.rows, cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});

app.get('/rolex/coll/cosmographdaytona', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const result = await client.query(`SELECT * FROM  rolexcollections where id = '5'`);
        const cont = await client.query('SELECT * FROM rolexcollcosmographdaytona');
        res.json({ message: 'Data retrieval successful', watches: result.rows, cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});

app.get('/rolex/coll/oysterperpetual', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const result = await client.query(`SELECT * FROM  rolexcollections where id = '6'`);
        const cont = await client.query('SELECT * FROM rolexcolloysterperpetual');
        res.json({ message: 'Data retrieval successful', watches: result.rows, cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});

app.get('/rolex/coll/yachtmaster', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const result = await client.query(`SELECT * FROM  rolexcollections where id = '7'`);
        const cont = await client.query('SELECT * FROM  rolexcollyachtmaster');
        res.json({ message: 'Data retrieval successful', watches: result.rows, cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});

app.get('/rolex/coll/seadweller', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const result = await client.query(`SELECT * FROM  rolexcollections where id = '8'`);
        const cont = await client.query('SELECT * FROM rolexcollseadweller');
        res.json({ message: 'Data retrieval successful', watches: result.rows, cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});

app.get('/rolex/coll/deepsea', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const result = await client.query(`SELECT * FROM  rolexcollections where id = '9'`);
        const cont = await client.query('SELECT * FROM rolexcolldeepsea');
        res.json({ message: 'Data retrieval successful', watches: result.rows, cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});
// ------------------------

app.get('/rolex/coll/airking', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const result = await client.query(`SELECT * FROM  rolexcollections where id = '10'`);
        const cont = await client.query('SELECT * FROM rolexcollairking');
        res.json({ message: 'Data retrieval successful', watches: result.rows, cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});

app.get('/rolex/coll/explorer', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const result = await client.query(`SELECT * FROM  rolexcollections where id = '11'`);
        const cont = await client.query('SELECT * FROM rolexcollexplorer');
        res.json({ message: 'Data retrieval successful', watches: result.rows, cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});

app.get('/rolex/coll/adydatejust', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const result = await client.query(`SELECT * FROM  rolexcollections where id = '12'`);
        const cont = await client.query('SELECT * FROM rolexcollladydatejust');
        res.json({ message: 'Data retrieval successful', watches: result.rows, cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});

app.get('/rolex/coll/skydweller', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const result = await client.query(`SELECT * FROM  rolexcollections where id = '13'`);
        const cont = await client.query('SELECT * FROM rolexcollskydweller');
        res.json({ message: 'Data retrieval successful', watches: result.rows, cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});

app.get('/rolex/coll/1908', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const result = await client.query(`SELECT * FROM  rolexcollections where id = '14'`);
        const cont = await client.query('SELECT * FROM rolexcoll1908');
        res.json({ message: 'Data retrieval successful', watches: result.rows, cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});

app.get('/patekphilippe/coll/grandcomplic', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const cont = await client.query('SELECT * FROM patekphilippegrandcoll');
        res.json({ message: 'Data retrieval successful', cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});

app.get('/audemarspiguet/watches', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const cont = await client.query('SELECT * FROM audemars_piguet_watches');
        res.json({ message: 'Data retrieval successful', cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});

app.get('/audemarspiguet/watches/royaloak', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const cont = await client.query('SELECT * FROM audemars_piguet_watches_royal_oak');
        res.json({ message: 'Data retrieval successful', cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});


app.get('/audemarspiguet/watches/royaloakoffshore', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const cont = await client.query('SELECT * FROM audemars_piguet_watches_offshore');
        res.json({ message: 'Data retrieval successful', cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});

app.get('/audemarspiguet/watches/concept', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const cont = await client.query('SELECT * FROM  audemars_piguet_watches_royal_concept');
        res.json({ message: 'Data retrieval successful', cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});

app.get('/cartier/tank', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const cont = await client.query('SELECT * FROM cartier_tank_onl');
        res.json({ message: 'Data retrieval successful', cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});


app.get('/cartier/antosde', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const cont = await client.query('SELECT * FROM acrtier_santos_de');
        res.json({ message: 'Data retrieval successful', cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});

app.get('/cartier/panterede', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const cont = await client.query('SELECT * FROM cartier_pantere_de');
        res.json({ message: 'Data retrieval successful', cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});


const port = process.env.PORT || 5050;

app.listen(port, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT);
    else
        console.log("Error occurred, server can't start", error);
});
