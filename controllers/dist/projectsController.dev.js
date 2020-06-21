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
  //res.send('Enviaste el formulario');
  console.log(req.body);
};