const conexion = require('../db/conexionDB');
const consulta = require('../utilidades/consultaCategoria.json');

function SeleccionarCategoriaByServicio(idCategoria) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.selectCategoriaByServicio, [idCategoria], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
}

function agregarCategoria(nombreCategoria, descripcionCategoria) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.insertCategoria, [nombreCategoria, descripcionCategoria], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
}

function actualizarCategoria(nombreCategoria, descripcionCategoria) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.updateCategoria, [nombreCategoria, descripcionCategoria], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
}

function eliminarCategoria(idCategoria) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.updateCategoria, [idCategoria], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
}

module.exports = {
    SeleccionarCategoriaByServicio: SeleccionarCategoriaByServicio,
    agregarCategoria: agregarCategoria,
    actualizarCategoria: actualizarCategoria,
    eliminarCategoria: eliminarCategoria
}