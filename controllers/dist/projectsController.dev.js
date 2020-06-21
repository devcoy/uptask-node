"use strict";

exports.home = function (req, res) {
  res.render('index', {
    pageName: 'Proyectos'
  });
};