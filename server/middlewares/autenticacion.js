const jwt = require('jsonwebtoken');

// Verificar token 

let verificarToken = (req, res, next) => {
    let token = req.get('token');
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no valido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();
    });

};

let verificaAdmin_Role = (req, res, next) => {
    let usuario = req.usuario;

    if (usuario.role !== 'ADMIN_ROLE') {
        res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });
    } else {
        console.log('Entrando al next');

        next();
    }
};


module.exports = {
    verificarToken,
    verificaAdmin_Role
}