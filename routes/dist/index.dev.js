"use strict";

/**
 * Archivos de rutas
 */
var express = require('express');

var router = express.Router();

var projectsController = require('../controllers/projectsController'); // Importar el contralador


module.exports = function () {
  router.get('/', projectsController.home);
  router.get('/nuevo-proyecto', projectsController.formProject);
  router.post('/nuevo-proyecto', projectsController.createProject);
  router.get('/nosotros', function (req, res) {
    res.render('about-us');
  });
  return router;
};