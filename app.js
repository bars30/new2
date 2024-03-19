const express = require('express');
const db = require('./db')
const app = express();
const PORT = 5050;
  
app.get('/', (req, res)=>{
    res.status(200);
    res.send("This is from root");
});


  
app.get('/api/users', async (req, res) => {
    try {
        const users = await db.query('SELECT * FROM person');
        res.json({ message: 'Data retrieval successful', users: users.rows });
    } catch (err) {
        res.status(500).json(db, { message: 'Internal Server Error' });
    }
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);