if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const DARKSKY_API_KEY = process.env.DARKSKY_API_KEY;
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static('public'));

app.post('/weather', (req, res) => {
    const url = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${req.body.latitude},${req.body.longitude}?units=auto`;
    axios({
        url: url,
        responseType: 'json'
    }).then(data => res.json(data.data.currently))
})

app.listen(port, () => {
    console.log('Server started');
})