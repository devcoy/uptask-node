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