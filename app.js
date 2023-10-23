const express = require('express');
const path = require('path')

const app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/restaurants', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'restaurants.html'));
});

app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/confirm', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'confirm.html'));
});

app.get('/recommend', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'recommend.html'));
});

app.listen(3000);