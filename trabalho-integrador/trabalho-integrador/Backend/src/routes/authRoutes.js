const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const clienteMiddleware = require('../middlewares/clienteMiddleware');

// Autentica o usuario e retorna os dados basicos da conta.
router.post('/login', authController.login);

// Cria uma conta nova (cliente + login) a partir da tela de cadastro.
router.post('/cadastro', clienteMiddleware.validarCadastro, authController.cadastrar);

module.exports = router;