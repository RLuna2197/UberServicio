//importacion de conexion y consulta
const conexion = require('../db/conexionDB');
const consulta = require('../utilidades/consultaHistorialConversion.json')

//Metodo para seleccionar historialdeconersion por pedido

function SeleccionarConversionPorPedido(idPedido){
    return new Promise((resolve, reject) => {
        conexion.query(consulta.selectConversionPorPedido, [idPedido], (error, resultado) => {
            if(error){
                reject(error)
            }else{
                resolve(resultado)
            }
        })
    })
}


function agregarHistorialConversion(moneda, valor, idPedido) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.insertarHistorialConversion, [moneda, valor, idPedido], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
}

module.exports = {
    SeleccionarConversionPorPedido : SeleccionarConversionPorPedido,
    agregarHistorialConversion : agregarHistorialConversion
}