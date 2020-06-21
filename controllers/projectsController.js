exports.home = (req, res) => {
  res.render('index', {
    pageName : 'Proyectos',
  });
} 

exports.formProject = (req, res) => {
  res.render('new-project', {
    pageName: 'Nuevo Proyecto'
  });
}

exports.createProject = (req, res) => {
  //res.send('Enviaste el formulario');
  console.log(req.body);
}