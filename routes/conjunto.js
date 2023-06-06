const express = require('express');
const router = express.Router();
const ConjuntoController = require('../controllers/conjunto-controller');

router.get('/consultar-conjunto-usuario',ConjuntoController.consulta_conjunto_usuario);
router.post('/consultar-conjunto-proyecto',ConjuntoController.consulta_conjunto_proyecto);
router.get('/read-conjunto',ConjuntoController.read_conjunto);
router.post('/add-conjunto',ConjuntoController.add_conjunto);

module.exports = router;