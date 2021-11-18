function validarDatos(data) {
    let valid = false;

    if (data == null || data == '' || data == undefined)
        valid = true
        
    return valid;
}

module.exports = {
    validarDatos: validarDatos
}