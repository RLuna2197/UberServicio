const conexion = require('../db/conexionDB');
const consulta = require('../utilidades/consultaCategoria.json');

function ObenterCategorias() {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.selectCategoria, (error, resultado) => {
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

function actualizarCategoria(nombreCategoria, descripcionCategoria, idCategoria) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.actualizaCategoria, [nombreCategoria, descripcionCategoria, idCategoria], (error, resultado) => {
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
        conexion.query(consulta.deleteCategoria, [idCategoria], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
}

module.exports = {
    ObenterCategorias: ObenterCategorias,
    agregarCategoria: agregarCategoria,
    actualizarCategoria: actualizarCategoria,
    eliminarCategoria: eliminarCategoria
}