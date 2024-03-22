const express = require('express');
const db = require('./db');
const app = express();
const PORT = 5050;

const dotenv = require('dotenv')
dotenv.config({ path: './config.evn' })

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


app.get('/api/watches', async (req, res) => {
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







const port = process.env.PORT || 5050;

app.listen(port, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT);
    else
        console.log("Error occurred, server can't start", error);
});
