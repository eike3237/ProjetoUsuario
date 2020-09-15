// Define a utilização do model usuario e a dependência http-status
const Usuario = require('../models/usuario');
const status = require('http-status');

// Cria o método Insert, obtendo os dados da request //pega oq vei odo routes e através do req coloca os dados em seus devidos lugares
exports.Insert = (req, res, next) => { 
    const nome = req.body.nome;
    const salario = req.body.salario;
    const dataNascimento = req.body.dataNascimento;
    const ativo = req.body.ativo;

    // Popula cada um dos campos do model com os campos recebido na request
    // Usuario.create é um INSERT no banco de dados
    Usuario.create({
        nome: nome,
        salario: salario,
        dataNascimento: dataNascimento,
        ativo: ativo,
    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(usuario => {
            if (usuario) {
                res.status(status.OK).send(usuario);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};

// Aula 03 -adicionando metodos para consulta da tabela toda ou de um ponto especifico por ID
// Estes metodos possuem as mesmas assinaturas
//Linha 35 = caso seja acioando o "metodo" chamado SelectAll - Esta definição é dada no Routes
exports.SelectAll = (req, res, next) => {
    Usuario.findAll()
        .then(usuario => {
            if(usuario){
                res.status(status.OK).send(usuario);
            }
        })
        .catch(error => next(error));
};

exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;

    Usuario.findByPk(id)
        .then(usuario => {
            if (usuario) { //se o Usuario existe, ou seja = true
                res.status(status.OK).send(usuario);
            } else {
                res.status(status.NOT_FOUND).send(); // caso o retorno seja não encotrado da a msg de not found e retorna nada
            }
        })
        .catch(error => next(error));
};

//Lembrando que .catch é um filtro de erros que retorna o erro que aconteceu durante o processo dentro do programa