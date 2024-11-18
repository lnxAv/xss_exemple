const express = require('express');
const app = express();

// Configuration EJS et middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const { country } = req.query;
    res.render('login', { country });
});

app.get('/test', (req, res) => {
    const { name } = req.query;
    res.render('welcome', { username: name });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Version vulnérable : pas de protection
    res.render('welcome', { username: username });
});

app.listen(3000, () => {
    console.log('Serveur vulnérable démarré sur http://localhost:3000');
});