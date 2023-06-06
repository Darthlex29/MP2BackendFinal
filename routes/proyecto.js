const express = require('express');
const router = express.Router();
const ProyectoController = require('../controllers/proyect-controller');

router.post('/consultar-proyecto-id',ProyectoController.consulta_proyecto_codigo);
router.get('/read-proyecto',ProyectoController.read_proyecto);
router.post('/add-proyecto',ProyectoController.add_proyecto);

module.exports = router;