const yup = require('yup');

function validarDatos(data) {
    let valid = false;

    if (data === null || data === '' || data === undefined)
        valid = true
        
    return valid;
}

function validate(validation) {
    return (req, res, next) => {
        try {
            validation(req.body);

            next();
        } catch (error) {
            res.status(400).json({
                status: 'error',
                message: error.message,
            });
        }
    };
}

function createUsersValidation(data) {
    const schema = yup.object().shape({
        correo: yup.string().matches(/^[a-z0-9_.]+@[a-z0-9]+\.[a-z0-9_.]+$/).required(),
        usuarioNombre: yup.string().min(5).max(50).required(),
        contrasena: yup.string().min(8).max(20).required(),
        vendedor: yup.bool().required(),
        comprador :  yup.bool().required(),
        estado : yup.bool().required()

    });
    
    schema.validateSync(data);
}

module.exports = {
    validarDatos: validarDatos,
    validate: validate,
    createUsersValidation : createUsersValidation
}