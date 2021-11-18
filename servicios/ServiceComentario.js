//Importacion de conexion y consulta
const conexion = require('../db/conexionDB');
const consulta = require('../utilidades/consultaComentario.json');

//Metodo seleccionar Usuario Por username
function SeleccionarComentarioByServicio(idServicio) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.selectComentarioByServicio, [idServicio], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
    
}

//Insertar comentario
function agregarComentario(comentario, calificacion, idServicio, idUsuario) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.insertComentario, [comentario, calificacion, idServicio, idUsuario], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
}

//Metodo Actualizar Comentario

function actualizarComentario(comentario, calificacion, idComentario) {

    return new Promise((resolve, reject) => {
        conexion.query(consulta.updateComentario, [comentario, calificacion, idComentario], (error, resultado) => {
            if (error) reject(error)
            else resolve(resultado)
        })
    })

}

//Metodo eliminar comentario
function eliminarComentario(idComentario) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.deleteComentario, [idComentario], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })

}


module.exports = {
    SeleccionarComentarioByServicio : SeleccionarComentarioByServicio,
    agregarComentario : agregarComentario,
    actualizarComentario : actualizarComentario,
    eliminarComentario : eliminarComentario
}