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
                status: 'Error',
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


function PersonValidation(data) {
    const schema = yup.object().shape({
        nombre: yup.string().min(4).max(50).required(),
        apellido: yup.string().min(4).max(50).required(),
        telefono: yup.string().max(8).required(),
        urlFoto: yup.string().required()

    });
    
    schema.validateSync(data);
}

function ServiceValidation(data) {
    const schema = yup.object().shape({
        descripcion: yup.string().max(1000),
        nombre: yup.string().max(100).required(),
        precio : yup.number().positive().required(),
        disponible: yup.bool().required(),
        calificacion : yup.number(),
        idCategoria : yup.number().integer().positive().required(),
        idPersona : yup.number().integer().positive().required()
    });
    
    schema.validateSync(data);
}

function CommentValidation(data) {
    const schema = yup.object().shape({
        comentario: yup.string().max(1000),
        calificacion: yup.number().integer().positive().required(),
        idServicio : yup.number().integer().positive().required(),
        idUsuario: yup.number().integer().positive().required()
    });
    
    schema.validateSync(data);
}

function ImageServiceValidation(data) {
    const schema = yup.object().shape({
        url: yup.string().max(200),
        idServicio : yup.number().integer().positive().required()
    });
    
    schema.validateSync(data);
}

function CategoryValidation(data) {
    const schema = yup.object().shape({
        nombreCategoria: yup.string().max(50).required(),
        descripcionCategoria : yup.number().integer().positive().required()
    });
    
    schema.validateSync(data);
}

module.exports = {
    validarDatos: validarDatos,
    validate: validate,
    createUsersValidation : createUsersValidation,
    PersonValidation : PersonValidation,
    ServiceValidation : ServiceValidation,
    CommentValidation : CommentValidation,
    ImageServiceValidation : ImageServiceValidation,
    CategoryValidation : CategoryValidation
}