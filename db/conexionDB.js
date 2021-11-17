const mysql = require('mysql')
const properties = require('../cadenaConexion.json')

module.exports = mysql.createConnection({
    host: properties.host,
    user: properties.usuario,
    password: properties.contrasena,
    database: properties.baseDatos
});