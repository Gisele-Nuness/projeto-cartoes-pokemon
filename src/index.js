const setaVoltar = document.getElementById('voltar')

const setaAvancar = document.getElementById('avancar')

const cartoes = document.querySelectorAll(".cartao")

let cartaoAtual = 0;

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add('selecionado');
}

function esconderCartao() {
    cartoes[cartaoAtual].classList.remove('selecionado');
}
function avancarCartao() {
    if (cartaoAtual === cartoes.length - 1) return;

    esconderCartao();
    cartaoAtual++;

    mostrarCartao();
}

function voltarCartao() {
    if (cartaoAtual === 0) return;

    esconderCartao();
    cartaoAtual--;

    mostrarCartao();
}

setaAvancar.addEventListener('click', avancarCartao);
setaVoltar.addEventListener('click', voltarCartao);



