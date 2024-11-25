var pesquisaModel = require("../models/pesquisaModel");

function listar(req, res) {
    pesquisaModel.listar().then(function(resultado){
        
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function validarId(req, res) {
    var idUsuario = req.params.idUsuario;
    pesquisaModel.validarId(idUsuario).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function buscarUltimasMedidas(req, res) {

    console.log(`Recuperando as ultimas medidas`);

    pesquisaModel.buscarUltimasMedidas().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoReal(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    pesquisaModel.buscarMedidasEmTempoReal().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function calcularIdadeMedia(req, res) {
    pesquisaModel.calcularIdadeMedia().then(function(resultado){
        console.log(resultado)
        res.status(200).json(resultado);
        
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function calcularFrequenciaAtividade(req, res) {
    pesquisaModel.calcularFrequenciaAtividade().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
function calcularSaudeMental(req, res) {
    pesquisaModel.calcularSaudeMental().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
function atividadeFisica(req, res) {
    pesquisaModel.atividadeFisica().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
function alimentacao(req, res) {
    pesquisaModel.alimentacao().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
function sonoSaudeMental(req, res) {
    pesquisaModel.sonoSaudeMental().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
function sonoxEstresse(req, res) {
    pesquisaModel.sonoxEstresse().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
function objetivoSaude(req, res) {
    pesquisaModel.objetivoSaude().then(function(resultado){
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

function obterDados(req, res) {
    pesquisaModel.obterDados()
        .then(function(resultado) {
            if (resultado.length > 0) {
                // Envia os dados no formato JSON como resposta para o frontend
                res.status(200).json(resultado);  // 200 OK com os dados
            } else {
                // Caso não haja resultados, envia uma resposta de "sem conteúdo"
                res.status(204).send("Nenhum dado encontrado!");
            }
        })
        .catch(function(erro) {
            // Se ocorrer um erro, envia a mensagem de erro como resposta
            res.status(500).json({ error: erro.sqlMessage });
        });
}

module.exports = {
    obterDados,
    cadastrar,
    calcularIdadeMedia,
    calcularFrequenciaAtividade,
    calcularSaudeMental,
    atividadeFisica,
    alimentacao,
    sonoSaudeMental,
    sonoxEstresse,
    objetivoSaude,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    validarId
}