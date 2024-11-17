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
    res.send(/* html */ `
        <h1>Hello ${name}</h1>
        <form action="/submit" method="post">
            <input type="text" name="name" value="World">
            <input type="submit" value="Submit">
        </form>
        
    `);
});

app.post('/submit', (req, res) => {
    const body = req.body;
    const date = new Date();
    const text = `
        [${date.toLocaleString()}]
        ${Object.entries(body).map(([key, value]) => `${key}: ${value}`).join('\n')}
    `
    fs.appendFileSync(path.join(__dirname, './public', 'txt/input.txt'), text);
    res.send('ok');
});

app.get('*' , (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'js/xss.js'));
});

app.listen(3003, () => {
    console.log('Serveur démarré sur http://localhost:3003');
});