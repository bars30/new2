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

// 1
// app.get('/api/bestselledwatches', async (req, res) => {
//     const client = db.getClient(); // Get client instance
//     try {
//         await client.connect(); // Connect to the database
//         const result = await client.query('SELECT * FROM bestselledwatches');
//         res.json({ message: 'Data retrieval successful', watches: result.rows });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     } finally {
//         await client.end(); // Close the connection
//     }
// }); USING DATABASE CONNECTION
app.get('/api/bestselledwatches', (req, res) => {
    res.json({
        message: 'Data retrieval successful',
        watches: [
            {
                id: "1",
                brand: "Rolex",
                model: "Rolex Submariner",
                img: "https://i.ibb.co/2KPf9jG/1.png",
                price: "15000$"
            },
            {
                id: "5",
                brand: "Breitling",
                model: "Tag Heuer Carrera",
                img: "https://i.ibb.co/wLfgCzQ/5-jpg.png",
                price: "4000$"
            },
            {
                id: "2",
                brand: "Cartier",
                model: "Cartier Tank",
                img: "https://i.ibb.co/fCDT1Ps/2-jpg.png",
                price: "3500$"
            },
            {
                id: "3",
                brand: "Hublot",
                model: "Hublot Big Bang",
                img: "https://i.ibb.co/pw1mbbt/3-jpg.png",
                price: "50000$"
            },
            {
                id: "4",
                brand: "Breitling",
                model: "Breitling Super Chronomat",
                img: "https://i.ibb.co/zh5yjy2/4-jpg.png",
                price: "10000$"
            }
        ]
    });
});

// 2
// app.get('/rolex/coll/datejust', async (req, res) => {
//     const client = db.getClient(); // Get client instance
//     try {
//         await client.connect(); // Connect to the database
//         const result = await client.query(`SELECT * FROM  rolexcollections where id = '1'`);
//         const cont = await client.query('SELECT * FROM rolexcolldatejust');
//         res.json({ message: 'Data retrieval successful', watches: result.rows, cont : cont.rows });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     } finally {
//         await client.end(); // Close the connection
//     }
// });  USING DATABASE CONNECTION
app.get('/rolex/coll/datejust', async (req, res) => {
    res.json({ message: 'Data retrieval successful', 
    watches: [
        {
          "id": "1",
          "collection": "Datejust",
          "desription": "A watch for the dates to remember"
        }
      ], cont : [
        {
          "id": "1",
          "model": "Oyster, 36 mm, Oystersteel and yellow gold",
          "img1": "https://i.ibb.co/5jY3cNK/1-01.png",
          "img2": "https://i.ibb.co/64ZXrFr/1-02.png",
          "img3": "https://i.ibb.co/6XwFfhr/1-03.png",
          "img4": "https://i.ibb.co/2KW1sf3/1-04.png",
          "img5": "https://i.ibb.co/L1M9KdY/1-05.png",
          "url": "https://www.rolex.com/watches/datejust/m126233-0039#/m126233-0039/dial"
        },
        {
          "id": "2",
          "model": "Oyster, 36 mm, Oystersteel",
          "img1": "https://i.ibb.co/5cHWdWf/1-02.png",
          "img2": "https://i.ibb.co/L8cX7FH/2-02.png",
          "img3": "https://i.ibb.co/MNg5RB7/2-03.png",
          "img4": "https://i.ibb.co/2NvHchV/2-04.png",
          "img5": "https://i.ibb.co/qW0hWP2/2-05.png",
          "url": "https://www.rolex.com/ru/watches/datejust/m126200-0020#/m126200-0020/dial"
        },
        {
          "id": "3",
          "model": "Oyster, 31 mm, Everose gold and diamonds",
          "img1": "https://i.ibb.co/fkQx6R0/1-03.png",
          "img2": "https://i.ibb.co/PQpcHb8/3-02.png",
          "img3": "https://i.ibb.co/8Ph0WRJ/3-03.png",
          "img4": "https://i.ibb.co/G3SkSYX/3-04.png",
          "img5": "https://i.ibb.co/TLV2dbv/3-05.png",
          "url": "https://www.rolex.com/ru/watches/datejust/m278285rbr-0025#/m278285rbr-0025/dial"
        },
        {
          "id": "4",
          "model": "Oyster, 41 mm, Oystersteel and white gold",
          "img1": "https://i.ibb.co/DWxbB7y/1-04.png",
          "img2": "https://i.ibb.co/5YBV447/4-02.png",
          "img3": "https://i.ibb.co/hdTWvBH/4-03.png",
          "img4": "https://i.ibb.co/TgnqxSX/4-04.png",
          "img5": "https://i.ibb.co/s6Msfsd/4-05.png",
          "url": "https://www.rolex.com/ru/watches/datejust/m126334-0023#/m126334-0023/dial"
        }
      ] });
    
});

// 3
// app.get('/rolex/coll/submariner', async (req, res) => {
//     const client = db.getClient(); // Get client instance
//     try {
//         await client.connect(); // Connect to the database
//         const result = await client.query(`SELECT * FROM  rolexcollections where id = '2'`);
//         const cont = await client.query('SELECT * FROM rolexcollsubmariner');
//         res.json({ message: 'Data retrieval successful', watches: result.rows, cont : cont.rows });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     } finally {
//         await client.end(); // Close the connection
//     }
// }); USING DATABASE CONNECTION
app.get('/rolex/coll/submariner', async (req, res) => {
    res.json({ message: 'Data retrieval successful',
        watches : [
        {
            "id": "2",
            "collection": "Submariner",
            "desription": "The supreme diver’s watch"
            }],
        cont : [
            {
                "id": "1",
                "model": "Oyster, 41 mm, Oystersteel",
                "img": "https://i.ibb.co/L8QBY0c/1-01.png",
                "url": null
              },
              {
                "id": "2",
                "model": "Oyster, 41 mm, Oystersteel and yellow gold",
                "img": "https://i.ibb.co/SQGvPc8/2-01.png",
                "url": "https://www.rolex.com/ru/watches/submariner/m126613lb-0002#/m126613lb-0002/bezel"
              },
              {
                "id": "3",
                "model": "Oyster, 41 mm, Oystersteel",
                "img": "https://i.ibb.co/Zx802pH/3-01.png",
                "url": "https://www.rolex.com/ru/watches/submariner/m126610lv-0002#/m126610lv-0002/bezel"
              },
              {
                "id": "4",
                "model": "Oyster, 41 mm, yellow gold",
                "img": "https://i.ibb.co/tK9y7q9/4-01.png",
                "url": "https://www.rolex.com/ru/watches/submariner/m126618ln-0002#/m126618ln-0002/bezel"
              }
        ] });
    
});

// 4
// app.get('/rolex/coll/gmtmasterll', async (req, res) => {
//     const client = db.getClient(); // Get client instance
//     try {
//         await client.connect(); // Connect to the database
//         const result = await client.query(`SELECT * FROM  rolexcollections where id = '3'`);
//         const cont = await client.query('SELECT * FROM rolexcollgmtmaster');
//         res.json({ message: 'Data retrieval successful', watches: result.rows, cont : cont.rows });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     } finally {
//         await client.end(); // Close the connection
//     }
// }); USING DATABASE CONNECTION
app.get('/rolex/coll/gmtmasterll', async (req, res) => {
    res.json({ message: 'Data retrieval successful', 
    watches: [
        {
          "id": "3",
          "collection": "GMT-Master II",
          "desription": "Two time-zones,  two-colours,  uniquely iconic"
        }
    ],
     cont : [
        {
          "id": "1",
          "model": "Oyster, 40 mm, Oystersteel",
          "img": "https://i.ibb.co/sJzKB7m/1-01.png",
          "url": "https://www.rolex.com/ru/watches/gmt-master-ii/m126720vtnr-0001#/m126720vtnr-0001/dial"
        },
        {
          "id": "2",
          "model": "Oyster, 40 mm, white gold",
          "img": "https://i.ibb.co/DtHMnFb/2-01.png",
          "url": "https://www.rolex.com/ru/watches/gmt-master-ii/m126719blro-0003#/m126719blro-0003/dial"
        },
        {
          "id": "3",
          "model": "Oyster, 40 mm, Oystersteel and Everose gold",
          "img": "https://i.ibb.co/NZpKT80/3-01.png",
          "url": "https://www.rolex.com/ru/watches/gmt-master-ii/m126711chnr-0002"
        },
        {
          "id": "4",
          "model": "Oyster, 40 mm, Oystersteel and yellow gold",
          "img": "https://i.ibb.co/Cvj9nnh/4-01.png",
          "url": "https://www.rolex.com/ru/watches/gmt-master-ii/m126713grnr-0001"
        }
      ] });
    
});


// 5
// app.get('/rolex/coll/daydate', async (req, res) => {
//     const client = db.getClient(); // Get client instance
//     try {
//         await client.connect(); // Connect to the database
//         const result = await client.query(`SELECT * FROM  rolexcollections where id = '4'`);
//         const cont = await client.query('SELECT * FROM rolexcolldaydate');
//         res.json({ message: 'Data retrieval successful', watches: result.rows, cont : cont.rows });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     } finally {
//         await client.end(); // Close the connection
//     }
// }); USING DATABASE CONNECTION
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

app.get('/cartier/ballonde', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const cont = await client.query('SELECT * FROM cartier_ballon_de');
        res.json({ message: 'Data retrieval successful', cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});

app.get('/cartier/baignoire', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const cont = await client.query('SELECT * FROM  cartier_baignoire');
        res.json({ message: 'Data retrieval successful', cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});

app.get('/cartier/ronde', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const cont = await client.query('SELECT * FROM cartierronde');
        res.json({ message: 'Data retrieval successful', cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});

app.get('/jaeger/reservo', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const cont = await client.query('SELECT * FROM jaeger_reservo');
        res.json({ message: 'Data retrieval successful', cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});



app.get('/jaeger/polaris', async (req, res) => {
    const client = db.getClient(); // Get client instance
    try {
        await client.connect(); // Connect to the database
        const cont = await client.query('SELECT * FROM jaeger_polaris');
        res.json({ message: 'Data retrieval successful', cont : cont.rows });
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.end(); // Close the connection
    }
});
app.use(express.json());

app.post('/usersmessage', async (req, res) => {
    try {
        const data = req.body;
        const fulln = data.fulln;
        const mail = data.mail;
        const message = data.message;

        // Ensure that the request body contains all required fields
        if (!fulln || !mail || !message) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Get a client instance
        const client = db.getClient();

        // Connect to the database
        await client.connect();

        // Execute the SQL query to insert data into the usermessages table
        const queryText = 'INSERT INTO usermessages (fullname, mail, message) VALUES ($1, $2, $3) RETURNING *';
        const values = [fulln, mail, message];
        const result = await client.query(queryText, values);

        // Close the database connection
        await client.end();

        // Send back a response indicating successful data insertion
        res.status(201).json({ message: 'Data insertion successful', insertedData: result.rows[0] });
    } catch (err) {
        // Handle errors
        console.error('Error inserting data:', err);
        res.status(500).json({ message: 'An error occurred while inserting data' });
    }
});





const port = process.env.PORT || 5050;

app.listen(port, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT);
    else
        console.log("Error occurred, server can't start", error);
});
