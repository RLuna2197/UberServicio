//Importacion de conexion y consulta
const conexion = require('../db/conexionDB');

function insertarPedidoServicio(idPedido, idServicio) {
    return new Promise((resolve, reject) => {
        conexion.query("insert into pedidoservicio() values(?,?) ", [idPedido, idServicio], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
}

module.exports = {
    insertarPedidoServicio : insertarPedidoServicio
}