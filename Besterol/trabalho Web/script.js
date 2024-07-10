// Seleciona todos os botões de abrir modal

const openModalButtons = document.querySelectorAll('.botao-ok-btn');

// Adiciona o evento de clique a cada botão para abrir o modal correspondente

openModalButtons.forEach((button, index) => {
    button.addEventListener('click', () => {

        // Adiciona 1 ao índice para corresponder ao ID do modal (começando de 1)

        document.getElementById(`modal-0${index + 1}`).classList.add('showModal');
    });
});

// Seleciona todos os elementos de fechar modal (X)

const closeModalSpans = document.querySelectorAll('.fechar-modal');

// Seleciona todos os botões de fechar modal

const closeModalButtons = document.querySelectorAll('[id^=fechar-modal-]');

// Adiciona o evento de clique a cada elemento de fechar modal (X)

closeModalSpans.forEach((span, index) => {
    span.addEventListener('click', () => {
        // Adiciona 1 ao índice para corresponder ao ID do modal (começando de 1)
        document.getElementById(`modal-0${index + 1}`).classList.remove('showModal');
    });
});

// Adiciona o evento de clique a cada botão de fechar modal

closeModalButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Adiciona 1 ao índice para corresponder ao ID do modal (começando de 1)
        document.getElementById(`modal-0${index + 1}`).classList.remove('showModal');
    });
});

// Fecha o modal se o usuário clicar fora do conteúdo do modal

window.onclick = (event) => {

    // Verifica se o alvo do clique é um elemento com a classe 'modal'

    if (event.target.classList.contains('modal')) {

        // Fecha o modal removendo a classe 'showModal'

        event.target.classList.remove('showModal');
    }
};

// Manda para o WhatsApp ao clicar no botão Conversar

document.getElementById('conversar01').addEventListener('click', () => {
    window.open('https://bit.ly/MovementPersonalContatar');
});
document.getElementById('conversar02').addEventListener('click', () => {
    window.open('https://bit.ly/MovementPersonalContatar');
});
document.getElementById('conversar03').addEventListener('click', () => {
    window.open('https://bit.ly/MovementPersonalContatar');
});
document.getElementById('conversar04').addEventListener('click', () => {
    window.open('https://bit.ly/MovementPersonalContatar');
});
