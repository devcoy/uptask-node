/**
 * Archivos de rutas
 */

const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController'); // Importar el contralador

module.exports = function() {
  router.get('/', projectsController.home) ;

  router.get('/nuevo-proyecto', projectsController.formProject);
  router.post('/nuevo-proyecto', projectsController.createProject)



  router.get('/nosotros', (req, res) => {
    res.render('about-us');
  });

  return router;
}