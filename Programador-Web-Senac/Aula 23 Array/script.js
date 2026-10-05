const compras = ['Café', 'Pão', 'Fofitos', 'Torta', 'Leite'];
const lista = document.getElementById('lista');

// merendas[0]     // "Café"
// merendas.length // 3
// merendas.push("Salgados"); // adiciona no final

let variavel = 0
console.log(variavel);

variavel = 1
console.log(variavel);

console.log(compras[0]); // Saída: Café
console.log(compras[1]); // Saída: Pão
console.log(compras); // Saída: Pão

// for (let i = 0; i < compras.length; i++) {
//     lista.innerHTML += `${compras[i]}, `;
// }

function mostrarCompras() {
    compras.forEach((ELEMENTO) => {
        alert(ELEMENTO);
    });
}

// Executa a lista a cada 5 segundos (5000 milissegundos)
setInterval(mostrarCompras, 5000); 

