const Proyecto = require("../models/proyect-model");
const Usuario = require("../models/usuario-model");
const bcrypt = require("bcrypt");

function add_proyecto(req, res) {
  let proyecto = new Proyecto({
    name: req.body.name,
    ruta: req.body.ruta,
    codigo: req.body.codigo,
  });

  proyecto.save((error, result) => {
    if (error) {
      return res.status(500).json({
        error: true,
        message: `Server error: ${error}`,
        code: 0,
      });
    }

    if (!result) {
      return res.status(400).json({
        error: true,
        message: `Client error: ${error}`,
        code: 20,
      });
    }

    return res.status(200).json({
      error: false,
      message: "Success",
      data: result,
      code: 10,
    });
  });
}

function read_proyecto(req, res) {
  Proyecto.find().exec((error, proyectos) => {
    if (error) {
      return res.status(500).json({
        error: true,
        message: `Server error: ${error}`,
        code: 0,
      });
    }

    return res.status(200).json({ data: proyectos })[0];
  });
}

function consulta_proyecto_codigo(req, res) {
  try {
    Proyecto.findOne({ codigo: req.body.codigo }, (erro, proyectoDB) => {
      try {
        return res.status(200).json({
          id: proyectoDB.codigo,
          name: proyectoDB.name,
          archivo: proyectoDB.ruta,
          error: false,
          message: "Usuario encontrado",
        });
      } catch (error) {
        return res.status(400).json({
          error: true,
          message: `Client error: ${error}`,
          code: 20,
        });
      }
    });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: `Client error: ${error}`,
      code: 20,
    });
  }
}

module.exports = {
  read_proyecto,
  add_proyecto,
  consulta_proyecto_codigo,
};
