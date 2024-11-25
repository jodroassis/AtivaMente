var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            a.id AS idArtigo,
            a.titulo,
            a.descricao,
            a.dtHora,
            a.fk_usuario,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM artigo a
            INNER JOIN usuario u
                ON a.fk_usuario = u.id;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisarDescricao(texto) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucaoSql = `
        SELECT
            a.id AS idArtigo,
            a.titulo,
            a.descricao,
            a.dtHora,
            a.fk_usuario,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM artigo a
            INNER JOIN usuario u
                ON a.fk_usuario = u.id
        WHERE a.descricao LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
        SELECT 
            a.id AS idArtigo,
            a.titulo,
            a.descricao,
            a.dtHora,
            a.fk_usuario,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM artigo a
            INNER JOIN usuario u
                ON a.fk_usuario = u.id
        WHERE u.id = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarComentariosPorArtigo(idArtigo) {
    console.log("ACESSEI O MODELO listarComentariosPorArtigo()");
    var instrucaoSql = `
        SELECT 
            c.id as idComentario,
            c.titulo,
            c.descricao,
            c.dtHora,
            c.fk_usuario,
            u.nome AS nomeUsuario,
            c.artigo AS idArtigo
        FROM comentario as c
        JOIN usuario as u ON c.fk_usuario = u.id
        WHERE c.artigo = ${idArtigo};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(titulo, descricao, idUsuario, idArtigo) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao,  idUsuario);
    // Obter a data atual com fuso horário de Brasília
    const dataBrasilia = new Date();

    // Obter a data no formato YYYY-MM-DD
    const ano = dataBrasilia.getFullYear();
    const mes = String(dataBrasilia.getMonth() + 1).padStart(2, '0');
    const dia = String(dataBrasilia.getDate()).padStart(2, '0');
    const dataFormatada = `${ano}-${mes}-${dia}`;

    // Obter a hora no formato HH:mm:ss
    const hora = String(dataBrasilia.getHours()).padStart(2, '0');
    const minutos = String(dataBrasilia.getMinutes()).padStart(2, '0');
    const segundos = String(dataBrasilia.getSeconds()).padStart(2, '0');
    const horaFormatada = `${hora}:${minutos}:${segundos}`;

    // Combinar data e hora para o formato esperado pelo MySQL
    const dataHoraBrasilia = `${dataFormatada} ${horaFormatada}`;

    // Certifique-se de que a dataHoraBrasilia tenha o formato correto: YYYY-MM-DD HH:mm:ss
    console.log("Data e Hora formatada:", dataHoraBrasilia); // Para depuração
    var instrucaoSql = `
        INSERT INTO comentario (titulo, descricao, dtHora, fk_usuario, artigo) VALUES ('${titulo}', '${descricao}', '${dataHoraBrasilia}', ${idUsuario}, ${idArtigo});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novaDescricao, idComentario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idComentario);
    var instrucaoSql = `
        UPDATE comentario SET descricao = '${novaDescricao}' WHERE id = ${idComentario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(idComentario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idComentario);
    var instrucaoSql = `
        DELETE FROM comentario WHERE id = ${idComentario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorUsuario,
    listarComentariosPorArtigo,
    pesquisarDescricao,
    publicar,
    editar,
    deletar
}
