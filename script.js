// script.js
let perguntaAtual = 0;
let acertos = 0;
const todasPerguntas = [
    // Suas perguntas aqui...
    { texto: 'O céu é azul?', resposta: 'certo' },
    { texto: 'A Terra gira em torno do Sol?', resposta: 'certo' },
    // Adicione mais perguntas semelhantes aqui...
    { texto: 'A velocidade da luz é maior do que a velocidade do som?', resposta: 'certo' },
    { texto: 'O oxigênio é o gás mais abundante na atmosfera da Terra?', resposta: 'errado' },
    { texto: 'A água ferve a 100 graus Fahrenheit?', resposta: 'errado' },
    { texto: 'Os gatos são mamíferos?', resposta: 'certo' },
    { texto: 'O Brasil é o maior país da América do Sul?', resposta: 'certo' },
    { texto: 'O plástico é um material biodegradável?', resposta: 'errado' },
    { texto: 'O símbolo químico para o ouro é "Ag"?', resposta: 'errado' },
    { texto: 'A Grande Muralha da China é visível do espaço?', resposta: 'errado' },
    { texto: 'A clorofila é responsável pela cor vermelha das folhas das árvores?', resposta: 'errado' },
    { texto: 'A Lua tem sua própria atmosfera?', resposta: 'errado' },
    { texto: 'O sistema solar inclui apenas oito planetas?', resposta: 'errado' },
    { texto: 'O átomo é a menor partícula da matéria?', resposta: 'certo' },
    { texto: 'A Terra é o terceiro planeta do sistema solar?', resposta: 'certo' },
    { texto: 'A soma dos ângulos internos de um triângulo sempre é 180 graus?', resposta: 'certo' },
    { texto: 'A força da gravidade é mais fraca na Lua do que na Terra?', resposta: 'certo' },
    { texto: 'O som não se propaga no vácuo?', resposta: 'certo' },
    { texto: 'A fórmula H2O representa a água?', resposta: 'certo' },
    { texto: 'A Mona Lisa é uma pintura de Leonardo da Vinci?', resposta: 'certo' },
    { texto: 'O Brasil faz fronteira com a Argentina?', resposta: 'certo' },
    { texto: 'O símbolo químico para o ferro é "Fe"?', resposta: 'certo' },
    { texto: 'Os seres humanos têm 12 costelas?', resposta: 'errado' },
    { texto: 'A energia solar é uma forma renovável de energia?', resposta: 'certo' }
];

function iniciarQuiz() {
    embaralharPerguntas();
    mostrarPergunta();
}

function embaralharPerguntas() {
    for (let i = todasPerguntas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [todasPerguntas[i], todasPerguntas[j]] = [todasPerguntas[j], todasPerguntas[i]];
    }
}

function mostrarPergunta() {
    if (perguntaAtual < 10) { // Limitado a 10 perguntas
        const perguntaAtualElement = document.getElementById('pergunta');
        const mensagemElement = document.getElementById('mensagem');
        const botoesResposta = document.querySelectorAll('.button');

        perguntaAtualElement.textContent = todasPerguntas[perguntaAtual].texto;
        mensagemElement.style.display = 'none';

        // Habilita os botões após a resposta
        botoesResposta[0].disabled = false;
        botoesResposta[1].disabled = false;
    } else {
        mostrarResultado();
    }
}

function resposta(respostaUsuario) {
    const mensagemElement = document.getElementById('mensagem');

    if (respostaUsuario === todasPerguntas[perguntaAtual].resposta) {
        acertos++;
        mensagemElement.textContent = 'Resposta correta! Parabéns!';
        mensagemElement.classList.add('mensagem-correta');
    } else {
        mensagemElement.textContent = 'Resposta errada. Tente novamente.';
        mensagemElement.classList.add('mensagem-incorreta');
    }

    mensagemElement.style.display = 'block';

    // Desabilita os botões após a resposta
    const botoesResposta = document.querySelectorAll('.button');
    botoesResposta[0].disabled = true;
    botoesResposta[1].disabled = true;

    perguntaAtual++;

    if (perguntaAtual < 10) {
        setTimeout(mostrarPergunta, 2000); // Após 2 segundos, exibe a próxima pergunta
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    const resultado = document.getElementById('resultado');
    const acertosElement = document.getElementById('acertos');
    acertosElement.textContent = `Você acertou ${acertos} de 10 perguntas.`;
    resultado.style.display = 'block';

    const novoQuizButton = document.getElementById('novo-quiz-button');
    novoQuizButton.style.display = 'block';
}

function iniciarNovoQuiz() {
    location.reload(); // Recarrega a página
}

// Inicia o quiz quando a página carrega
window.onload = iniciarQuiz;
