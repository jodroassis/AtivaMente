var database = require("../database/config");

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
  var instrucao = "select truncate(avg(idade),0) as idadeMedia from pesquisa;";
  return database.executar(instrucao);
}

function calcularFrequenciaAtividade() {
  var instrucao = `select atividade_fisica, 
                          (count(*) / (select count(*) from pesquisa)) * 100 as porcentagem from pesquisa
                   where atividade_fisica in ('diariamente', 'semanalmente')
                   group by atividade_fisica;`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function calcularSaudeMental() {
  var instrucao = `select saude_mental, 
                        (count(*) * 100 / (select count(*) from pesquisa)) as porcentagem from pesquisa
                    where saude_mental in ('excelente', 'boa', 'regular')
                    group by saude_mental;`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function atividadeFisica() {
  var instrucao = `select atividade_fisica, count(*) as quantidade
                   from pesquisa
                   group by atividade_fisica;`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function alimentacao() {
  var instrucao = `select alimentacao, count(*) as quantidade from pesquisa
                   group by alimentacao;`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function sonoSaudeMental() {
  var instrucao = `select saude_mental, sono, count(*) as quantidade
                   from pesquisa
                   group by saude_mental, sono;`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function sonoxEstresse() {
  var instrucao = `select sono, nivel_estresse, count(*) as quantidade
                   from pesquisa
                   group by sono, nivel_estresse;`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function objetivoSaude() {
  var instrucao = `select objetivos_saude, count(*) as quantidade from pesquisa
                   group by objetivos_saude;`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastrar(
  idUsuario,
  idade,
  atividade_fisica,
  alimentacao,
  sono,
  saude_mental,
  objetivos_saude,
  nivel_estresse
) {
  var instrucao = `
        INSERT INTO pesquisa (fkUsuario, idade, atividade_fisica, alimentacao, sono, saude_mental, objetivos_saude, nivel_estresse) VALUES (${idUsuario}, ${idade}, '${atividade_fisica}', '${alimentacao}',${sono},'${saude_mental}','${objetivos_saude}','${nivel_estresse}');
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

// NOVOS GRAFICOS

function alimentacaoSaudeMental() {
    var instrucao = `
      select saude_mental, alimentacao, (count(*) * 100 / (select count(*) from pesquisa 
                                        where saude_mental in('excelente', 'fraca', 'regular'))) as porcentagem
      from pesquisa
        where saude_mental in ('excelente', 'fraca', 'regular') and alimentacao in ('saudavel', 'balanceada', 'desregrada', 'vegetariana')
        group by saude_mental, alimentacao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }

  function tendenciaPorIdade() {
    var instrucao = `
      select 
        case 
          when idade between 0 AND 20 then '0-20'
          when idade between 21 AND 40 then'21-40'
          when idade between 41 AND 60 then '41-60'
          else '61+'
        end as faixa_etaria,
        saude_mental, count(*) as quantidade from pesquisa
            where saude_mental in ('excelente', 'regular', 'fraca')
            group by faixa_etaria, saude_mental
            order by faixa_etaria, saude_mental;
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
  validarId,
  alimentacaoSaudeMental,
  tendenciaPorIdade
};
