//Con esto ya se puede trabaajr con express
const express = require('express');
// Se crea aplicacion con express
const app = express();
// El puerto en el que correra
const port = 3000;
// Añadimos libreria body parser, para gestionar las peticiones post que se puedan mandar objetos
// asociados a esa peticion post
const bodyParser = require('body-parser');
// Importamos el archivo para las rutas
const { routerApi } = require('./routes/index');

require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Todas las peticiones que vengan desde la ruta / las va a gestionar el archivo
// que viene importado en la variable apiRouter
routerApi(app);

//Se esta atento al puerto 300 que es el puerto para las app de node.js

app.listen(port, () => {
  // Se corre cuando la aplicacion ya esta corriendo
  console.log('Servidor arrancado!');
});
