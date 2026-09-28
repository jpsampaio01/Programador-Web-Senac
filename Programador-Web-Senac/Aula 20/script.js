const formNum = document.getElementById("formNum")

if (formNum) {
    formNum.addEventListener("submit", function (event) {
    event.preventDefault();
    const numero = parseFloat(document.getElementById("numero").value);
    const mensagem = document.getElementById("mensagem");
    if (numero > 0) {
        mensagem.textContent = "Positivo";
        mensagem.style.color = "green";
    }
    else if (numero < 0) {
        mensagem.textContent = "Negativo";
        mensagem.style.color = "red";
    }
    else if (numero === 0) {
        mensagem.textContent = "Neutro";
        mensagem.style.color = "orange";
    }
     else {
        mensagem.textContent = "Inválido";
        mensagem.style.color = "black";
    }
    }
)
}