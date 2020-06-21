const express = require('express');
const routes = require('./routes');
const path = require('path'); // Permite manipular el Filesystem
const bodyParser = require('body-parser');
// Crear una app de Express
const app = express();

// Configurar assets
app.use(express.static('public'));

// Hábilitar pug
app.set('view engine', 'pug');

// Vistas
app.set('viewa', path.join(__dirname, './views'));

// Hábilitar body parser para leer datos del formulario
app.use(bodyParser.urlencoded({extended: true})),

// Archivos de rutas
app.use('/', routes());


app.listen(3000);