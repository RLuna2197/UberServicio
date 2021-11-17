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

module.exports = {
    ObtenerUsuarios : ObtenerUsuarios,
    SeleccionarUsuarioBynombreUsuario : SeleccionarUsuarioBynombreUsuario
}