var pesquisaModel = require("../models/pesquisaModel");

function listar(req, res) {
    pesquisaModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var idade= req.body.idade
    var atividade_fisica= req.body.atividade_fisica
    var alimentacao= req.body.alimentacao
    var sono= req.body.sono
    var saude_mental= req.body.saude_mental
    var objetivos_saude= req.body.objetivos_saude
    var nivel_estresse= req.body.nivel_estresse

    //if (nome == undefined) {
     //   res.status(400).send("Seu nome está undefined!");
    //}

    pesquisaModel.cadastrar(idUsuario, idade, atividade_fisica, alimentacao, sono, saude_mental, objetivos_saude, nivel_estresse)
    .then(function(resposta){
        res.status(200).send("Pesquisa criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}