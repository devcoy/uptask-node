  const express = require('express');

  // Crear una app de Express
  const app = express();

  // ruta para el home, con .use ejecutara cualquier tipo de petición http
  app.use('/', (req, res) => {
    res.send('Hola');
  });


  app.listen(3000);