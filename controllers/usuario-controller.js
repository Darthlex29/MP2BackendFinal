const Usuario = require('../models/usuario-model');
const bcrypt = require('bcrypt');

function add_usuario (req,res){
    let usuario = new Usuario({
        name: req.body.name,
        email: req.body.email,
        pss: req.body.pss,
    });

    usuario.save( (error,result) => {
        if (error){
            return res.status(500).json({
                error: true,
                message: `Server error: ${error}`,
                code: 0
            });
        }

        if ( !result ){
            return res.status(400).json({
                error: true,
                message: `Client error: ${error}`,
                code: 20
            });
        }

        return res.status(200).json({
            error: false,
            message: 'Success',
            data: result,
            code: 10
        });

    });
}

function read_usuario (req,res){
    Usuario.find().exec( (error,usuarios) => {
        if (error){
            return res.status(500).json({
                error: true,
                message: `Server error: ${error}`,
                code: 0
            });
        }

        return (res.status(200).json({data: usuarios}))[0];
    });
}

function login_usuario (req,res){
        
        Usuario.findOne({ email: req.body.email }, (erro, usuarioDB)=>{
            if (erro) {
              return res.status(500).json({
                 ok: false,
                 err: erro
              })
           }
       // Verifica que exista un usuario con el email escrita por el usuario.
     
          if (!usuarioDB) {
             return res.status(400).json({
               ok: false,
               err: {
                   message: "Usuario contraseña incorrectos"
               }
            })
          }
       // Valida que la contraseña escrita por el usuario, sea la almacenada en la db
    
          if ((req.body.pss) != (usuarioDB.pss)){
              
             return res.status(400).json({
                ok: false,
                err: {
                  message: "Usuario o contraseña incorrectos"
                }
             });
          }
  
          return res.status(200).json({
            id: usuarioDB._id,
            name: usuarioDB.name,
            error: false,
            message: 'Usuario encontrado'
        });

       });
    }

    

    function consulta_usuario_email (req,res){
        
        Usuario.findOne({ email: req.body.email }, (erro, usuarioDB)=>{
  
          return res.status(200).json({
            id: usuarioDB._id,
            name: usuarioDB.name,
            error: false,
            message: 'Usuario encontrado'
        });

       });
    }



module.exports = {
    read_usuario,
    add_usuario,
    login_usuario,
    consulta_usuario_email,
};