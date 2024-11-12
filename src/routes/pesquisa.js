var express = require("express");
var router = express.Router();

var pesquisaController = require("../controllers/pesquisaController");

router.post("/cadastrar/:idUsuario", function (req, res) {
    // função a ser chamada quando acessar /pesquisa/cadastrar
    pesquisaController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /pesquisa/listar
    pesquisaController.listar(req, res);
});

module.exports = router;