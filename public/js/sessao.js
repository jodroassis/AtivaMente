// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var cpf = sessionStorage.CPF_USUARIO;
    var idArtigo = sessionStorage.ID_ARTIGO;

    var b_usuario = document.getElementById("b_usuario");
    var mostrar_cpf = document.getElementById("mostrar_cpf")
    var idArtigo = document.getElementById("idArtigo")

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
        mostrar_cpf.innerHTML = cpf;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

