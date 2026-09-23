const formLogin = document.getElementById("formLogin");

if (formLogin) {
    formLogin.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o formulário de recarregar a página
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");
    if (usuario === "admin" && senha === "1234") {
        mensagem.textContent = "Login realizado!";
        mensagem.style.color = "green";
        // Redireciona para a página interna
        window.location.href = "interno.html";
        // setTimeout(function () {
        //      window.location.href = "interno.html"; ), 500);

        } else {
            mensagem.textContent = "Usuario ou senha incorretos.";
            mensagem.style.color = "red";
        }
    });
}else{
    
}

function Sair() {
    window.location.href = "login.html"
}