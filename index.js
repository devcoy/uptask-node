const express = require('express');
const routes = require('./routes');
const path = require('path'); // Permite manipular el Filesystem

// Crear una app de Express
const app = express();

// Hábilitar pug
app.set('view engine', 'pug');

// Vistas
app.set('viewa', path.join(__dirname, './views'));


// Archivos de rutas
app.use('/', routes());


app.listen(3000);