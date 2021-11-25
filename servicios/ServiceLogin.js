const conexion = require('../db/conexionDB');

function login(user, password) {
    const SQL_LOGIN = "select * from usuario where estado=1 and contrasena=? and (correo =? or usuarioNombre =?)";
    return new Promise((resolve, reject) => {
        
        conexion.query(SQL_LOGIN, [password, user, user], (err, resultado) => {
            if (err) reject(err)
          
            
            else resolve(resultado) 
        })
    })
}

module.exports={
    login:login
}

