//Modulos requeridos
const express = require('express');
const bodyparser = require('body-parser');
const jwt = require('jsonwebtoken');

//Servicios
const servicioUsuario = require('./servicios/ServiceUsuario');
const servicioComentario = require('./servicios/ServiceComentario');
const servicioPersona = require('./servicios/ServicePersona');
const servicioImagen = require('./servicios/ServiceImagenServicio');
//Validacion
const validador = require('./servicios/validacion');

//Mensajes 
const mensaje = require('./utilidades/Mensajes.json');

//express
const app = express();


app.use(bodyparser.json());






// Tabla Comentario

//Obetener Comentario por servicio
app.get('/Comentarios/:idServicio', (req, res) => {
    //Obtener parametro 
    let idServicio = req.params.idServicio;
    
    servicioComentario.SeleccionarComentarioByServicio(idServicio)
        .then(data => {
                res.status(200).send(data);
            }

        )
        .catch(error => {
            res.status(500).send(mensaje.mensajeError + error);
        })
})


//Agregar Comentario

app.post('/Comentarios', (req, res) => {
 
    let comentario = req.body.comentario;
    let calificacion = req.body.calificacion;
    let idServicio = req.body.idServicio;
    let idUsuario = req.body.idUsuario;

    let resp = {
        status: 200,
        mensaje: ""
    }
   
  
    if (validador.validarDatos(comentario) || validador.validarDatos(calificacion) || validador.validarDatos(idServicio) || validador.validarDatos(idUsuario)) {
        resp.status = 400;
        resp.mensaje = mensaje.MensajeValidador;

        res.set({
            "Context-Type": "Text/json"
        })
        return res.status(400).send(JSON.stringify(resp))
    }

    servicioComentario.agregarComentario(comentario, calificacion, idServicio, idUsuario)
        .then(data => {
            resp.mensaje = mensaje.mensajeOK;
            res.set({
                "Context-type": "Text/json"
            })
            return res.status(200).send(JSON.stringify(resp))
        })
        .catch(data => {
            resp.status = 500;
            res.set({
                "Context-type": "Text/json"
            })
            resp.mensaje = mensajes.mensajeError
            return res.status(200).send(JSON.stringify(resp));
        })

})


//Editar Comentario
app.put('/Comentarios/:idComentario', (req, res) => {
    //recibiendo del body
    let comentario = req.body.comentario;
    let calificacion = req.body.calificacion;



    //recibiendo del parametro
    let idComentario = req.params.idComentario;

    let resp = {
        status: 200,
        mensaje: ""
    }

    if (validador.validarDatos(comentario) || validador.validarDatos(calificacion) || validador.validarDatos(idComentario)) {
        resp.status = 400;
        resp.mensaje = mensajes.MensajeValidador

        res.set({
            "Content-type": "Text/json"
        })
        return res.status(400).send(JSON.stringify(resp));

    }
    servicioComentario.actualizarComentario(comentario, calificacion, idComentario)
        .then(data => {
            resp.mensaje = mensaje.mensajeOK;
            res.set({
                "Context-type": "Text/json"

            })
            return res.status(200).send(JSON.stringify(resp));
        })
        .catch(data => {
            resp.status = 500;
            res.set({
                "Content-type": "Text/json"
            })
            resp.mensaje = mensajes.mensajeError
            return res.status(200).send(JSON.stringify(resp));
        })

})

//Eliminar Comentario
app.delete('/Comentarios/:idComentario', (req, res) => {

    let idComentario = req.params.idComentario;

    let resp = {
        status: 200,
        mensaje: ""
    }

    if (validador.validarDatos(idComentario)) {
        resp.status = 400;
        resp.mensaje = mensajes.MensajeValidador

        res.set({
            "Content-type": "Text/json"
        })
        return res.status(400).send(JSON.stringify(resp));

    }
    servicioComentario.eliminarComentario(idComentario)
    resp.mensaje = mensaje.mensajeOK;
    res.set({
        "Context-type": "Text/json"

    })
    return res.status(200).send(JSON.stringify(resp));
})

//-------------------------------------------------------------------------------------------------

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

//Agregar Usuarios

app.post('/Usuarios', (req, res) => {
    
    let correo = req.body.correo;
    let usuarioNombre = req.body.usuarioNombre;
    let contrasena = req.body.contrasena;
    let vendedor = req.body.vendedor;
    let comprador = req.body.comprador;

    let resp = {
        status: 200,
        mensaje: ""
    }
   
    console.log(correo, usuarioNombre, contrasena, vendedor, comprador)
    if (validador.validarDatos(correo) || validador.validarDatos(usuarioNombre) || validador.validarDatos(contrasena) ) {
        resp.status = 400;
        resp.mensaje = mensaje.MensajeValidador;

        res.set({
            "Context-Type": "Text/json"
        })
        return res.status(400).send(JSON.stringify(resp))
    }
    servicioUsuario.agregarUsuario(correo, usuarioNombre, contrasena, vendedor, comprador)
        .then(data => {
            resp.mensaje = mensaje.mensajeOK;
            res.set({
                "Context-type": "Text/json"
            })
            return res.status(200).send(JSON.stringify(resp))
        })
        .catch(data => {
            resp.status = 500;
            res.set({
                "Context-type": "Text/json"
            })
            resp.mensaje = mensajes.mensajeError
            return res.status(200).send(JSON.stringify(resp));
        })
    })


//eliminar usuario
app.delete('/Usuarios/:idUsuario', (req, res) => {

    let idUsuario = req.params.idUsuario;

    let resp = {
        status: 200,
        mensaje: ""
    }

    if (validador.validarDatos(idUsuario)) {
        resp.status = 400;
        resp.mensaje = mensajes.MensajeValidador

        res.set({
            "Content-type": "Text/json"
        })
        return res.status(400).send(JSON.stringify(resp));

    }
    servicioUsuario.eliminarUsuario(idUsuario)
    resp.mensaje = mensaje.mensajeOK;
    res.set({
        "Context-type": "Text/json"

    })
    return res.status(200).send(JSON.stringify(resp));
})

//-------------------------------------------------------------------------------------------------

//Tabla Persona

//GetPersona
app.get('/Personas/:idUsuario', (req, res) => {
    //Obtener parametro 
    let idUsuario = req.params.idUsuario;
    
    servicioPersona.SeleccionarPersonaByID(idUsuario)
        .then(data => {
                res.status(200).send(data);
            }

        )
        .catch(error => {
            res.status(500).send(mensaje.mensajeError + error);
        })
})


//Update SET
app.put('/Personas/:idUsuario', (req, res) => {

   
    //recibiendo del body
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let telefono = req.body.telefono;
    let urlFoto = req.body.urlFoto;
    //recibiendo del parametro
    let idUsuario = req.params.idUsuario;

    let resp = {
        status: 200,
        mensaje: ""
    }

    if (validador.validarDatos(nombre) || validador.validarDatos(apellido) || validador.validarDatos(telefono) || validador.validarDatos(urlFoto) || validador.validarDatos(idUsuario)) {
        resp.status = 400;
        resp.mensaje = mensaje.MensajeValidador

        res.set({
            "Content-type": "Text/json"
        })
        return res.status(400).send(JSON.stringify(resp));

    } 
    
    servicioPersona.actualizarPersona(nombre, apellido, telefono, urlFoto, idUsuario)
        .then(data => {
            resp.mensaje = mensaje.mensajeOK;
            res.set({
                "Context-type": "Text/json"

            })
            return res.status(200).send(JSON.stringify(resp));
        })
        .catch(data => {
            resp.status = 500;
            res.set({
                "Content-type": "Text/json"
            })
            resp.mensaje = mensajes.mensajeError
            return res.status(200).send(JSON.stringify(resp));
        })

})

//eliminar Persona
app.delete('/Personas/:idUsuario', (req, res) => {

    let idUsuario = req.params.idUsuario;

    let resp = {
        status: 200,
        mensaje: ""
    }

    if (validador.validarDatos(idUsuario)) {
        resp.status = 400;
        resp.mensaje = mensajes.MensajeValidador

        res.set({
            "Content-type": "Text/json"
        })
        return res.status(400).send(JSON.stringify(resp));

    }
    servicioPersona.eliminarPersona(idUsuario)
    resp.mensaje = mensaje.mensajeOK;
    res.set({
        "Context-type": "Text/json"

    })
    return res.status(200).send(JSON.stringify(resp));
})

//-------------------------------------------------------------------------------------------------

//Tabla Imagen Servicio
//Get
app.get('/ImagenServicio/:idServicio', (req, res) => {
    //Obtener parametro 
    let idServicio= req.params.idServicio;
    
    servicioImagen.SeleccionarImagenByServicio(idServicio)
        .then(data => {
                res.status(200).send(data);
            }

        )
        .catch(error => {
            res.status(500).send(mensaje.mensajeError + error);
        })
})

//Agregar Imagen
app.post('/ImagenServicio', (req, res) => {
    
    let url = req.body.url;
    let idServicio = req.body.idServicio;

    let resp = {
        status: 200,
        mensaje: ""
    }
   
    if (validador.validarDatos(url) || validador.validarDatos(idServicio) ) {
        resp.status = 400;
        resp.mensaje = mensaje.MensajeValidador;

        res.set({
            "Context-Type": "Text/json"
        })
        return res.status(400).send(JSON.stringify(resp))
    }
    servicioImagen.agregarImagen(url, idServicio)
        .then(data => {
            resp.mensaje = mensaje.mensajeOK;
            res.set({
                "Context-type": "Text/json"
            })
            return res.status(200).send(JSON.stringify(resp))
        })
        .catch(data => {
            resp.status = 500;
            res.set({
                "Context-type": "Text/json"
            })
            resp.mensaje = mensajes.mensajeError
            return res.status(200).send(JSON.stringify(resp));
        })
    })


//Update SET
app.put('/ImagenServicio/:idImagen', (req, res) => {

   
    //recibiendo del body
    let url = req.body.url;
    //recibiendo del parametro
    let idImagen = req.params.idImagen;

    let resp = {
        status: 200,
        mensaje: ""
    }

    if (validador.validarDatos(url) || validador.validarDatos(idImagen) ) {
        resp.status = 400;
        resp.mensaje = mensaje.MensajeValidador

        res.set({
            "Content-type": "Text/json"
        })
        return res.status(400).send(JSON.stringify(resp));

    } 
    servicioImagen.actualizarImagen(url, idImagen)
        .then(data => {
            resp.mensaje = mensaje.mensajeOK;
            res.set({
                "Context-type": "Text/json"

            })
            return res.status(200).send(JSON.stringify(resp));
        })
        .catch(data => {
            resp.status = 500;
            res.set({
                "Content-type": "Text/json"
            })
            resp.mensaje = mensajes.mensajeError
            return res.status(200).send(JSON.stringify(resp));
        })

})

//eliminar Persona
app.delete('/ImagenServicio/:idImagen', (req, res) => {

    let idImagen = req.params.idImagen;

    let resp = {
        status: 200,
        mensaje: ""
    }

    if (validador.validarDatos(idImagen)) {
        resp.status = 400;
        resp.mensaje = mensajes.MensajeValidador

        res.set({
            "Content-type": "Text/json"
        })
        return res.status(400).send(JSON.stringify(resp));

    }
    servicioImagen.eliminarImagen(idImagen)
    resp.mensaje = mensaje.mensajeOK;
    res.set({
        "Context-type": "Text/json"

    })
    return res.status(200).send(JSON.stringify(resp));
})

app.listen(3000);