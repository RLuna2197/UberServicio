const conexion = require('../db/conexionDB');
const consulta = require('../utilidades/consultaPedidos.json');

function obtenerPedidos(idUsuario) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.SelectPedidosbyCliente, [idUsuario], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
}

function obtenerPedidosPorServicio(idServicio) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.SelectPedidosbyCliente, [idServicio], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
}

function insertarPedidos(fechaInicio, fechaFin, horaInicio, horaFin, total, idCliente) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.insertarPedido, [fechaInicio, fechaFin, horaInicio, horaFin, total, idCliente], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
}

function borrarPedido(idPedido) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.eliminarPedido, [idPedido], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
}

module.exports = {
    obtenerPedidos: obtenerPedidos,
    insertarPedidos: insertarPedidos,
    borrarPedido: borrarPedido,
    obtenerPedidosPorServicio :obtenerPedidosPorServicio
}