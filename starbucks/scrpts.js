let circulo = document.querySelector('.circulo');
let imagem = document.querySelector('.copo');

function trocarACor(cor) {
    circulo.style.background = cor;
}

function trocarImagem(endereco) {
    if (imagem) {
        imagem.src = endereco;
    } else {
        console.error("Elemento 'copo' não encontrado.");
    }
}
