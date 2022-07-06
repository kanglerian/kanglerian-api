const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const profile = require('./data/profile.json');
const socialmedia = require('./data/socialMedia.json');
const skills = require('./data/skills.json');
const organization = require('./data/organization.json');
const languages = require('./data/languages.json');
const experiences = require('./data/experiences.json');
const education = require('./data/education.json');
const courses = require('./data/courses.json');


app.use(cors());

app.get('/', async (req, res) => {
    res.send("Welcome to kanglerian API");
});

app.get('/api/profile', async (req, res) => {
    res.json(profile);
});

app.get('/api/socialmedia', async (req, res) => {
    res.json(socialmedia);
});

app.get('/api/skills', async (req, res) => {
    res.json(skills);
});

app.get('/api/organization', async (req, res) => {
    res.json(organization);
});

app.get('/api/languages', async (req, res) => {
    res.json(languages);
});

app.get('/api/experiences', async (req, res) => {
    res.json(experiences);
});

app.get('/api/education', async (req, res) => {
    res.json(education);
});

app.get('/api/courses', async (req, res) => {
    res.json(courses);
});

app.listen(port, () => console.log(`Apps run on http://localhost:${port}`));

module.express = app;