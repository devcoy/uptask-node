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
  console.log(req.body);

  // Válidar que tengamos algo en el input name  
  const { name } = req.body; // Asignación usando Destructuring

  let errors = [];

  if(!name) {
    errors.push({ text: 'Agrega un nombre al proyecto'});
  }

  // Si hay errores
  if(errors.length > 0 ) {
    res.render('new-project', {
      pageName: 'Nuevo Proyecto',
      errors
    });
  } else {
    // Insertar en la BD
  }
}