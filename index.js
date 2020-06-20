  const express = require('express');
  const routes = require('./routes');

  // Crear una app de Express
  const app = express();

  // Archivos de rutas
  app.use('/', routes());


  app.listen(3000);