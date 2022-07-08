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

app.get('/api/profile', async (req, res) => {
    res.json(data.profile);
});

app.get('/api/socialmedia', async (req, res) => {
    res.json(data.socialMedia);
});

app.get('/api/skills', async (req, res) => {
    res.json(data.skills);
});

app.get('/api/organization', async (req, res) => {
    res.json(data.organizations);
});

app.get('/api/languages', async (req, res) => {
    res.json(data.languages);
});

app.get('/api/experiences', async (req, res) => {
    res.json(data.experiences);
});

app.get('/api/certificates', async (req, res) => {
    res.json(data.certificates );
});

app.get('/api/education', async (req, res) => {
    res.json(data.education );
});

app.get('/api/courses', async (req, res) => {
    res.json(data.courses);
});

app.get('/api/stacks', async (req, res) => {
    res.json(data.stacks);
});


app.listen(port, () => console.log(`Apps run on http://localhost:${port}`));

module.express = app;