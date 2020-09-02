const express = require('express'); // dependencia pra criar rotas
const UsuarioController = require ('../controllers/usuarioController.js');
const router = express.Router(); //instanciando objeto chamado router que é do express

router.post('/usuarios', UsuarioController.Insert); // criando uma URL do tipo "post", tipo post= posso chamar ele no navegador pexm. qr dizer q vou inserir alguma info no meu bd

module.exports = router;
