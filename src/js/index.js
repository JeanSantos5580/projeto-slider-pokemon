/* OBJETIVO 1 - Quando clicarmos na seta de avançar temos que mostar o próximo cartão da lista.

- passo 1 - Dar um jeito de pegar o elemento html da seta avançar.

- passo 2 - Dar um jeito de identificar o click do usuário na seta avançar

- passo 3 - Fazer aparecer o próximo elemento da lista

- passo 4 - Buscar o cartão que está selecionado e esconder.

OBJETIVO 2 - Quando clicarmos na seta de voltar temos que mostar o cartão anterior da lista.

- passo 1 - Dar um jeito de pegar o elemento html da seta voltar.

- passo 2 - Dar um jeito de identificar o click do usuário na seta voltar

- passo 3 - Fazer aparecer o elemento anterior da lista

- passo 4 - Buscar o cartão que está selecionado e esconder.

*/

const voltar = document.querySelector('#voltar');
const avancar = document.querySelector('#avancar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function hideSelectedCard () {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function showCard (indiceCartao) {
    cartoes[cartaoAtual].classList.add('selecionado');
}


avancar.addEventListener('click', function () {
    
    if (cartaoAtual === cartoes.length - 1 ) return;

    hideSelectedCard();

    cartaoAtual++;
    showCard(cartaoAtual);
});

voltar.addEventListener('click', function () {
    
    if (cartaoAtual === 0) return;

    hideSelectedCard();
   
    cartaoAtual--;
    showCard(cartaoAtual);
});

