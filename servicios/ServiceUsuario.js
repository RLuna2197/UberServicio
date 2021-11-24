//Importacion de conexion y consulta
const conexion = require('../db/conexionDB');
const consulta = require('../utilidades/consultaUsuario.json');

//Metodo Seleccionar Aplicacion
function ObtenerUsuarios() {

    return new Promise((resolve, reject) => {
        conexion.query(consulta.selectUsuarios, (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })

}

//Metodo seleccionar Usuario Por username
function SeleccionarUsuarioBynombreUsuario(usuarioNombre) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.SelectUsuariosByUserName, [usuarioNombre], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
    
}

//Metodo agregar
function agregarUsuario(correo, usuarioNombre, contrasena, vendedor, comprador, estado) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.InsertUsuario, [correo, usuarioNombre, contrasena, vendedor, comprador, estado], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
}


//Metodo Actualizar usuario
function actualizarUsuario(correo, usuarioNombre, contrasena, vendedor, comprador, estado, idUsuario) {

    return new Promise((resolve, reject) => {
        conexion.query(consulta.updateUsuario, [correo, usuarioNombre, contrasena, vendedor, comprador, estado, idUsuario], (error, resultado) => {
            if (error) reject(error)
            else resolve(resultado)
        })
    })

}

//Metodo eliminar 
function eliminarUsuario(idUsuario) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.deleteusuario, [idUsuario], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })

}

module.exports = {
    ObtenerUsuarios : ObtenerUsuarios,
    SeleccionarUsuarioBynombreUsuario : SeleccionarUsuarioBynombreUsuario,
    agregarUsuario : agregarUsuario,
    eliminarUsuario : eliminarUsuario,
    actualizarUsuario : actualizarUsuario
}