"use strict";

var express = require('express');

var routes = require('./routes');

var path = require('path'); // Permite manipular el Filesystem


var bodyParser = require('body-parser'); // Crear una app de Express


var app = express(); // Configurar assets

app.use(express["static"]('public')); // Hábilitar pug

app.set('view engine', 'pug'); // Vistas

app.set('viewa', path.join(__dirname, './views')); // Hábilitar body parser para leer datos del formulario

app.use(bodyParser.urlencoded({
  extended: true
})), // Archivos de rutas
app.use('/', routes());
app.listen(3000);