document.addEventListener('DOMContentLoaded', () => {
    let score = 0;
    const scoreDisplay = document.getElementById('score');
    const hand = document.getElementById('hand');

    const baralho = [
        { nome: "História", impacto: 1 },
        { nome: "Impacto", impacto: 5 },
        { nome: "Solução", impacto: -3 }
    ];

    function jogarCarta(carta) {
        score += carta.impacto;
        if (score < 0) score = 0;
        scoreDisplay.innerText = score + " / 10";
        
        if (score >= 10) {
            alert("O impacto atingiu 10! Você perdeu.");
            score = 0;
            scoreDisplay.innerText = score + " / 10";
        }
    }

    baralho.forEach(c => {
        const btn = document.createElement('button');
        btn.innerText = c.nome;
        btn.style.margin = "5px";
        btn.onclick = () => jogarCarta(c);
        hand.appendChild(btn);
    });
});
