let score = 0;
const scoreDisplay = document.getElementById('score');

const baralho = [
    { nome: "História", impacto: 1 },
    { nome: "Impacto", impacto: 5 },
    { nome: "Solução", impacto: -3 }
];

function jogarCarta(carta) {
    score += carta.impacto;
    if (score < 0) score = 0;
    scoreDisplay.innerText = score;
    
    if (score >= 10) {
        alert("O impacto atingiu 10! Você perdeu.");
        score = 0;
        scoreDisplay.innerText = score;
    }
}

// Criar cartas na tela
const hand = document.getElementById('hand');
baralho.forEach(c => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerText = c.nome;
    div.onclick = () => jogarCarta(c);
    hand.appendChild(div);
});
