const express = require('express');
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')
require('dotenv').config()


// middlewear

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('its running bro')
})

app.listen(port, () => {
    console.log('listenig  to port', port);
})
