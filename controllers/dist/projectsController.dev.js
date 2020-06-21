"use strict";

exports.home = function (req, res) {
  res.render('index', {
    pageName: 'Proyectos'
  });
};

exports.formProject = function (req, res) {
  res.render('new-project', {
    pageName: 'Nuevo Proyecto'
  });
};

exports.createProject = function (req, res) {
  console.log(req.body); // Válidar que tengamos algo en el input name  

  var name = req.body.name; // Asignación usando Destructuring

  var errors = [];

  if (!name) {
    errors.push({
      text: 'Agrega un nombre al proyecto'
    });
  } // Si hay errores


  if (errors.length > 0) {
    res.render('new-project', {
      pageName: 'Nuevo Proyecto',
      errors: errors
    });
  } else {// Insertar en la BD
  }
};