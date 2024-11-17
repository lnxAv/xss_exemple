const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('*' , (req, res) => {
    res.sendFile('./xss.js');
});

app.listen(3003, () => {
    console.log('Serveur démarré sur http://localhost:3003');
});