const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario-controller');

router.post('/login-usuario',usuarioController.login_usuario);
router.post('/consultar-usuario-email',usuarioController.consulta_usuario_email);
router.get('/read-usuario',usuarioController.read_usuario);
router.post('/add-usuario',usuarioController.add_usuario);

module.exports = router;