var express = require("express");
var router = express.Router();

var pesquisaController = require("../controllers/pesquisaController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /pesquisa/cadastrar
    console.log("ESTOU AQUI")
    pesquisaController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /pesquisa/listar
    pesquisaController.listar(req, res);
});

module.exports = router;