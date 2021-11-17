//Modulos requeridos
const express = require('express');
const bodyparser = require('body-parser');
const jwt = require('jsonwebtoken');

//Servicios
const servicioUsuario = require('./servicios/ServiceUsuario');


//Mensajes 
const mensaje = require('./utilidades/Mensajes.json');

//express
const app = express();


app.use(bodyparser.json());

//Tabla Usuario

//ObtenerUsuarios
app.get('/Usuarios', (req, res) => {
    servicioUsuario.ObtenerUsuarios()
        .then(data => {
                res.status(200).send(data);
            }

        )
        .catch(error => {
            res.status(500).send(mensaje.mensajeError + error);
        })
})


app.listen(3000);