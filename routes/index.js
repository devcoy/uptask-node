/**
 * Archivos de rutas
 */

const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController'); // Importar el contralador

module.exports = function() {
  router.get('/', projectsController.home) ;

  router.get('/nosotros',  projectsController.about);

  return router;
}