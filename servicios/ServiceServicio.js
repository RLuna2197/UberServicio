//Importacion de conexion y consulta
const conexion = require('../db/conexionDB');
const consulta = require('../utilidades/consultaServicio.json');


//Metodo seleccionar Servicio por categoria
function SeleccionarServicioByCate(idCategoria) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.selectServiciobyCategoria , [idCategoria], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
    
}

//Metodo seleccionar Servicio por ID
function SeleccionarServicioById(idServicio) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.SelectServicioById, [idServicio], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
    
}

//Insertar Servicio
function agregarServicio(descripcion, nombre, precio, disponible, calificacion, idCategoria, idPersona) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.insertServicio, [descripcion, nombre, precio, disponible, calificacion, idCategoria, idPersona], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
}


//Metodo Actualizar Servicio
function actualizarServicio(descripcion, nombre, precio, disponible, calificacion, idCategoria, idServicio) {

    return new Promise((resolve, reject) => {
        conexion.query(consulta.UpdateServicio, [descripcion, nombre, precio, disponible, calificacion, idCategoria, idServicio], (error, resultado) => {
            if (error) reject(error)
            else resolve(resultado)
        })
    })

}

module.exports = {
    SeleccionarServicioByCate : SeleccionarServicioByCate,
    SeleccionarServicioById : SeleccionarServicioById,
    agregarServicio : agregarServicio,
    actualizarServicio : actualizarServicio
}