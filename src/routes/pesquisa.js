var express = require("express");
var router = express.Router();

var pesquisaController = require("../controllers/pesquisaController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /pesquisa/cadastrar
    console.log("ESTOU AQUI")
    pesquisaController.cadastrar(req, res);
});

router.get("/ultimas/", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/validarId/:idUsuario", function (req, res) {
    pesquisaController.validarId(req, res);
});

router.get("/tempo-real/", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/calcularIdadeMedia", function (req, res) {
    // função a ser chamada quando acessar /pesquisa/calcularIdadeMedia
    pesquisaController.calcularIdadeMedia(req, res);
});
router.get("/calcularFrequenciaAtividade", function (req, res) {
    // função a ser chamada quando acessar /pesquisa/calcularFrequenciaAtividade
    pesquisaController.calcularFrequenciaAtividade(req, res);
});
router.get("/atividadeFisica", function (req, res) {
    // função a ser chamada quando acessar /pesquisa/atividadeFisica
    pesquisaController.atividadeFisica(req, res);
});
router.get("/calcularSaudeMental", function (req, res) {
    // função a ser chamada quando acessar /pesquisa/calcularSaudeMental
    pesquisaController.calcularSaudeMental(req, res);
});
router.get("/alimentacao", function (req, res) {
    // função a ser chamada quando acessar /pesquisa/alimentacao
    pesquisaController.alimentacao(req, res);
});
router.get("/sonoSaudeMental", function (req, res) {
    // função a ser chamada quando acessar /pesquisa/saudeMentalxEstresse
    pesquisaController.sonoSaudeMental(req, res);
});
router.get("/sonoxEstresse", function (req, res) {
    // função a ser chamada quando acessar /pesquisa/sonoxEstresse
    pesquisaController.sonoxEstresse(req, res);
});
router.get("/objetivoSaude", function (req, res) {
    // função a ser chamada quando acessar /pesquisa/objetivoSaude
    pesquisaController.objetivoSaude(req, res);
});


router.get("/obterDados", function (req, res) {
    // função a ser chamada quando acessar /pesquisa/obterDados
    pesquisaController.obterDados(req, res);
});

module.exports = router;