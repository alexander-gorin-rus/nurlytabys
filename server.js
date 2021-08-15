const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const app = express();

app.get('/info', (req, res) => {
    res.send('I am working');
})

app.get('/name', (req, res) => {
    res.send('My name is Alexander');
})

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client/build')));
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Nurlytabys api is running on port ${port}`);
})