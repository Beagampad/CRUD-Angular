var app = require('./app');
var UserController = require('./controllers/user');//Controlador Usuario

//------------------------ CRUD -----------------------------------

//Añadir usuario por panel administracion
app.post('/add', UserController.adduser);

//Consultar Usuarios
app.get('/consult', UserController.consultuser);

//Consultar Usuario por ID
app.get('/detalles', UserController.consultUserbyID);

//Modificacion datos de usuario
app.post('/update', UserController.moduser);

//Borrar Usuario
app.post('/delete', UserController.borraruser);









