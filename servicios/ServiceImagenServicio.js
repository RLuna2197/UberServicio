//Importacion de conexion y consulta
const conexion = require('../db/conexionDB');
const consulta = require('../utilidades/consultaImagenServicio.json');

//Metodo seleccionar 
function SeleccionarImagenByServicio(idServicio) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.selectImagenbyServicio, [idServicio], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
    
}

//Insertar 
function agregarImagen(url, idServicio) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.insertImagen, [url, idServicio], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
}

//Metodo Actualizar 

function actualizarImagen(url, idImagen) {

    return new Promise((resolve, reject) => {
        conexion.query(consulta.updateImagen, [url, idImagen], (error, resultado) => {
            if (error) reject(error)
            else resolve(resultado)
        })
    })

}

//Metodo eliminar 
function eliminarImagen(idComentario) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.deleteImagen, [idComentario], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })

}

module.exports = {
    SeleccionarImagenByServicio : SeleccionarImagenByServicio,
    agregarImagen : agregarImagen,
    actualizarImagen : actualizarImagen,
    eliminarImagen : eliminarImagen
}