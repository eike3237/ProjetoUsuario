const express = require('express'); // dependencia pra criar rotas
const UsuarioController = require ('../controllers/usuarioController.js');
const router = express.Router(); //instanciando objeto chamado router que é do express

router.post('/usuarios', UsuarioController.Insert); // criando uma URL do tipo "post", tipo post= posso chamar ele no navegador pexm. qr dizer q vou inserir alguma info no meu bd
// Linha 5, ao fazer o "Post" ele pega o pacote e usa o metodo Insert do nosso Usuario controller

router.get('/usuarios', UsuarioController.SelectAll); // de acordo com o endereço define o metodo a ser chamado
router.get('/usuarios/:id', UsuarioController.SelectDetail); // como pode-se ver esses router são do tipo GET e não do tipo POST, quer só visualizar os dados dentro do BD

// AULA 04 - Update e Delete daqui pra baixo
router.put('/usuarios/:id', UsuarioController.Update);
router.delete('/usuarios/:id', UsuarioController.Delete);

module.exports = router;