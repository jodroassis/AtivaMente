var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM pesquisa;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(idUsuario, idade, atividade_fisica, alimentacao, sono, saude_mental, objetivos_saude, nivel_estresse) {
    var instrucao = `
        INSERT INTO pesquisa (fkUsuario, idade, atividade_fisica, alimentacao, sono, saude_mental, objetivos_saude, nivel_estresse) VALUES (${idUsuario}, ${idade}, '${atividade_fisica}', '${alimentacao}',${sono},'${saude_mental}','${objetivos_saude}','${nivel_estresse}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};