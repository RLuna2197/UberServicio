//Importacion de conexion y consulta
const conexion = require('../db/conexionDB');
const consulta = require('../utilidades/consultaPersona.json');

//Metodo seleccionar persona Por username
function SeleccionarPersonaByID(idUsuario) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.SelectPersonaById, [idUsuario], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })
    
}

//Metodo Actualizar Persona

function actualizarPersona(nombre, apellido, telefono, urlFoto, idUsuario) {

    return new Promise((resolve, reject) => {
        conexion.query(consulta.UpdatePersona, [nombre, apellido, telefono, urlFoto, idUsuario], (error, resultado) => {
            if (error) reject(error)
            else resolve(resultado)
        })
    })

}

//Metodo eliminar 
function eliminarPersona(idPersona) {
    return new Promise((resolve, reject) => {
        conexion.query(consulta.deleteusuario, [idPersona], (error, resultado) => {
            if (error) {
                reject(error)
            } else {
                resolve(resultado)
            }
        })
    })

}

module.exports = {
    SeleccionarPersonaByID : SeleccionarPersonaByID,
    actualizarPersona : actualizarPersona,
    eliminarPersona : eliminarPersona
}