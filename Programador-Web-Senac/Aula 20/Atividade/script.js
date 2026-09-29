// let imagem = document.createElement('img')

// let mensagem = document.getElementById("mensagem")

// imagem.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3QA0e4v2hB01E41CKI21bGEGU0_QzIkso6n7F82cdQA&s=10' 
// mensagem.appendChild(imagem)

function analisarClima() {
    const txtInput = document.getElementById('tempInput').value;
    const temp = parseFloat(txtInput);
    const output = document.getElementById('output');

    const imgClima = document.getElementById('fotoClima');

    if (txtInput === "") {
        output.innerHTML = "Por favor, insira uma temperatura válida."
        return;
    }

    if (temp < 0) {
        output.innerHTML = "Clima: Congelante. Na mala: Casaco térmico, luvas touca!"
        imgClima.src = "https://static.wixstatic.com/media/6bdaa3_235973272822487f807888a333ee0cea~mv2.jpeg/v1/fill/w_568,h_698,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6bdaa3_235973272822487f807888a333ee0cea~mv2.jpeg"

    } else if (temp <= 14){
        output.innerHTML = "Clima: Frio. Na mala: Leve casacos grossos e calças.";
        imgClima.src = "https://i.pinimg.com/564x/c3/22/f1/c322f153c2ff5d3977a0418aed635e89.jpg"

    } else if (temp <= 25) {
        output.innerHTML = "Clima Agradável. Na sala: Roupas leves e um casaco leve para a noite"
        imgClima.src = "./midia/roupasleves.jpg"

    } else {
        output.innerHTML = "Clima: Quente. Na mala: Roupas de banho, óculos de sol e protetor!";
        imgClima.src = "https://vitrinemadri.cdn.magazord.com.br/img/2026/03/blog/19740/moda-praia-infantil-o-que-levar-e-como-montar-looks-leves-para-criancas-image-1.jpg";
    }
}