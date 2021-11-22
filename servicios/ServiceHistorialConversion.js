const conexion = require('../db/conexionDB');
const consulta = require('../utilidades/consultaHistorialConversion.json');

function obtenerHistorialConversion() {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.obtenerHistorialConversion, (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
}


function seleccionarHConversionByPedido(idPedido) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.obtenerHistorialConversionbyPedido, [idPedido], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
}

/*function agregarHistorialConversion(moneda, valor, idPedido) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.insertarHistorialConversion, [moneda, valor, idPedido], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
}*/

function eliminarHistorialConversion(idConversion) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.eliminarHistorialConversion, [idConversion], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
}

module.exports = {
    obtenerHistorialConversion: obtenerHistorialConversion,
    // agregarHistorialConversion: agregarHistorialConversion,
    seleccionarHConversionByPedido: seleccionarHConversionByPedido,
    eliminarHistorialConversion: eliminarHistorialConversion
}