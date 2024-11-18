const express = require('express');
const path = require('path');
const app = express();

// Configuration EJS et middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('login');
});

app.get('/test', (req, res) => {
    const { name } = req.query;
    // Version vulnérable : pas de protection
    res.render('welcome', { 
        username: name,
        password: '' // ajout d'un password vide pour le test
    });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Version vulnérable : pas de protection
    res.render('welcome', { 
        username: username,
        password: password // On passe aussi le password
    });
});

app.listen(3000, () => {
    console.log('Serveur vulnérable démarré sur http://localhost:3000');
});