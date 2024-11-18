const express = require('express');
const path = require('path');
const validator = require('validator');
const app = express();

// Configuration EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // Ajoutez cette ligne

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.render('login');
});

app.get('/test', (req, res) => {
    const { name } = req.query;
    const safeName = validator.escape(name || '');
    res.render('welcome', { username: safeName });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const safeUsername = validator.escape(username || '');
    res.render('welcome', { username: safeUsername });
});

app.listen(3001, () => {
    console.log('Serveur sécurisé démarré sur http://localhost:3001');
});