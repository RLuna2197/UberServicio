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

function actualizaCategoria(nombreCategoria, descripcionCategoria, idCategoria) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.updateCategoria, [nombreCategoria, descripcionCategoria, idCategoria], (error, resultado) => {
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
    actualizaCategoria: actualizaCategoria,
    eliminarCategoria: eliminarCategoria
}