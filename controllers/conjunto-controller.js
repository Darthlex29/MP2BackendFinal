const Conjunto = require('../models/conjunto-model');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

function add_conjunto (req,res){
    let conjunto = new Conjunto({
        proyecto: req.body.proyecto,
        usuario: req.body.usuario,
        rol: req.body.rol
    });
   
  enviarCorreoOffice365(req.body.usuario, req.body.proyecto)

    conjunto.save( (error,result) => {
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



async function enviarCorreoOffice365(correo, codigo) {
    try {
      // Configuración del transporte para Office 365
      const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: {
          user: 'DibujaConNosotros@outlook.com', // Reemplaza con tu dirección de correo electrónico de Office 365
          pass: 'SimarelMejorProfedelaUD123*', // Reemplaza con tu contraseña de Office 365
        },
        tls: {
            rejectUnauthorized: false,
          },
      });
  
      // Detalles del correo electrónico
      const mailOptions = {
        from: 'DibujaConNosotros@outlook.com', // Reemplaza con tu dirección de correo electrónico de Office 365
        to: correo , // Reemplaza con la dirección de correo electrónico del destinatario
        subject: '¡Hey! Dibuja con nosotros.', // Asunto del correo electrónico
        text: 'Hola ¿Quieres dibujar con nosotros?, usa este codigo para unirte a la sala: '+ codigo, // Cuerpo del mensaje
      };
  
      // Envío del correo electrónico
      const info = await transporter.sendMail(mailOptions);
      console.log('Correo electrónico enviado correctamente:', info.response);
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
    }
  }

function read_conjunto(req,res){
    Conjunto.find().exec( (error,conjuntos) => {
        if (error){
            return res.status(500).json({
                error: true,
                message: `Server error: ${error}`,
                code: 0
            });
        }

        return (res.status(200).json({data: conjuntos}))[0];
    });
}
  

    function consulta_conjunto_proyecto (req,res){
        
        Conjunto.find({ proyecto: req.body.proyecto }, (erro, proyectoDB)=>{
  
          return res.status(200).json({
            conjuntos: proyectoDB,
            error: false,
            message: 'Proyecto encontrado'
        });

       });
    }

    function consulta_conjunto_usuario (req,res){
        
        Conjunto.find({ usuario: req.body.usuario }, (erro, proyectoDB)=>{
  
          return res.status(200).json({
            conjuntos: proyectoDB,
            error: false,
            message: 'Usuario encontrado'
        });

       });
    }


module.exports = {
    read_conjunto,
    add_conjunto,
    consulta_conjunto_proyecto,
    consulta_conjunto_usuario,
};