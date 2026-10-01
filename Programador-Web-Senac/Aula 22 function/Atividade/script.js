// Função para somar
function soma(a, b) {
    return a + b;
}

// Função para subtrair
function subtracao(a, b) {
    return a - b;
}

// Função para dividir
function divisao(a, b) {
    return a / b;
}

// Função para multiplicar
function multiplicacao(a, b) {
    return a * b;
}

// Função para calcular o resto da divisão
function restoDivisao(a, b) {
    return a % b;
}


// Função que pega os números digitados pelo usuário
function pegarNumeros() {

    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    return [numero1, numero2];
}


// Botão Soma
function calcularSoma() {

    let numeros = pegarNumeros();

    let resultado = soma(numeros[0], numeros[1]);

    document.getElementById("resultado").innerHTML =
        "Resultado: " + resultado;
}


// Botão Subtração
function calcularSubtracao() {

    let numeros = pegarNumeros();

    let resultado = subtracao(numeros[0], numeros[1]);

    document.getElementById("resultado").innerHTML =
        "Resultado: " + resultado;
}


// Botão Divisão
function calcularDivisao() {

    let numeros = pegarNumeros();

    if (numeros[1] === 0) {
        document.getElementById("resultado").innerHTML =
            "Não é possível dividir por zero!";
        return;
    }

    let resultado = divisao(numeros[0], numeros[1]);

    document.getElementById("resultado").innerHTML =
        "Resultado: " + resultado;
}


// Botão Multiplicação
function calcularMultiplicacao() {

    let numeros = pegarNumeros();

    let resultado = multiplicacao(numeros[0], numeros[1]);

    document.getElementById("resultado").innerHTML =
        "Resultado: " + resultado;
}


// Botão Resto da Divisão
function calcularResto() {

    let numeros = pegarNumeros();

    if (numeros[1] === 0) {
        document.getElementById("resultado").innerHTML =
            "Não é possível calcular o resto com divisão por zero!";
        return;
    }

    let resultado = restoDivisao(numeros[0], numeros[1]);

    document.getElementById("resultado").innerHTML =
        "Resultado: " + resultado;
}