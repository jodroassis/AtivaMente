var express = require("express");
var router = express.Router();

var artigoController = require("../controllers/artigoController");

router.get("/listar", function (req, res) {
    artigoController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    artigoController.listarPorUsuario(req, res);
});

router.get("/comentarios/:idArtigo", function (req, res) {
    artigoController.listarComentariosPorArtigo(req, res);
});


router.get("/pesquisar/:descricao", function (req, res) {
    artigoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    artigoController.publicar(req, res);
});

router.put("/editar/:idComentario", function (req, res) {
    artigoController.editar(req, res);
});

router.delete("/deletar/:idComentario", function (req, res) {
    artigoController.deletar(req, res);
});

module.exports = router;