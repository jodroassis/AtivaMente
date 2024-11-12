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
    var idUsuario = req.body.idUsuario_Server
    var idade= req.body.idadeServer
    var atividade_fisica= req.body.atividade_fisicaServer
    var alimentacao= req.body.alimentacaoServer
    var sono= req.body.sonoServer
    var saude_mental= req.body.saude_mentalServer
    var objetivos_saude= req.body.objetivos_saudeServer
    var nivel_estresse= req.body.nivel_estresseServer

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