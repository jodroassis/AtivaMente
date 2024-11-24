var database = require("../database/config")

function buscarUltimasMedidas() {

    var instrucaoSql = `SELECT fkUsuario, nome, idade, atividade_fisica, alimentacao, sono, saude_mental, objetivos_saude, nivel_estresse
        FROM pesquisa join usuario on pesquisa.fkUsuario = usuario.id;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function validarId(idUsuario) {

    var instrucaoSql = `SELECT * from pesquisa
                            where fkUsuario = ${idUsuario}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {

    var instrucaoSql = `SELECT fkUsuario, nome, idade, atividade_fisica, alimentacao, sono, saude_mental, objetivos_saude, nivel_estresse
        FROM pesquisa join usuario on pesquisa.fkUsuario = usuario.id
                    ORDER BY id DESC LIMIT 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterDados() {
    var instrucao = `
        SELECT fkUsuario, nome, idade, atividade_fisica, alimentacao, sono, saude_mental, objetivos_saude, nivel_estresse
        FROM pesquisa join usuario on pesquisa.fkUsuario = usuario.id;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function calcularIdadeMedia() {
    var instrucao = 'SELECT TRUNCATE(AVG(idade),0) AS idadeMedia FROM pesquisa;';
    return database.executar(instrucao);
}

function calcularFrequenciaAtividade() {
    var instrucao = `SELECT atividade_fisica, 
                          (COUNT(*) / (SELECT COUNT(*) FROM pesquisa)) * 100 AS porcentagem
                   FROM pesquisa
                   WHERE atividade_fisica IN ('diariamente', 'semanalmente')
                   GROUP BY atividade_fisica;`;
                   console.log("Executando a instrução SQL: \n" + instrucao);
                   return database.executar(instrucao);
}

function calcularSaudeMental() {
    var instrucao = `SELECT saude_mental, 
                        (COUNT(*) * 100.0 / (SELECT COUNT(*) FROM pesquisa)) AS porcentagem
                    FROM pesquisa
                    WHERE saude_mental IN ('excelente', 'boa', 'regular')
                    GROUP BY saude_mental;`;
                   console.log("Executando a instrução SQL: \n" + instrucao);
                   return database.executar(instrucao);
}

function atividadeFisica() {
    var instrucao = `SELECT atividade_fisica, COUNT(*) AS quantidade
                   FROM pesquisa
                   GROUP BY atividade_fisica;`;
                   console.log("Executando a instrução SQL: \n" + instrucao);
                   return database.executar(instrucao);
}

function alimentacao() {
    var instrucao = `SELECT alimentacao, COUNT(*) AS quantidade
                   FROM pesquisa
                   GROUP BY alimentacao;`;
                   console.log("Executando a instrução SQL: \n" + instrucao);
                   return database.executar(instrucao);
}

function sonoSaudeMental() {
    var instrucao = `SELECT saude_mental, sono, COUNT(*) AS quantidade
                   FROM pesquisa
                   GROUP BY saude_mental, sono;`;
                   console.log("Executando a instrução SQL: \n" + instrucao);
                   return database.executar(instrucao);
}

function sonoxEstresse() {
    var instrucao = `SELECT sono, nivel_estresse, COUNT(*) AS quantidade
                   FROM pesquisa
                   GROUP BY sono, nivel_estresse;`;
                   console.log("Executando a instrução SQL: \n" + instrucao);
                   return database.executar(instrucao);
}

function objetivoSaude() {
    var instrucao = `SELECT objetivos_saude, COUNT(*) AS quantidade
                   FROM pesquisa
                   GROUP BY objetivos_saude;`;
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
    obterDados,
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
};