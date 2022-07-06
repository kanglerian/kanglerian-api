const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const data = require('./db.json');

app.use(cors());

app.get('/', async (req, res) => {
    res.send("Welcome to kanglerian API");
});

app.get('/api', async (req, res) => {
    res.json(data);
});

app.listen(port, () => console.log(`Apps run on http://localhost:${port}`));

module.express = app;