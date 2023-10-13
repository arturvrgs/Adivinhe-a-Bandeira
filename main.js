class Jogador {
    constructor() {
        this.acertos = 0;
        this.erros = 0;
        this.pontuacao = 0;
    }

    acerto() {
        this.acertos++
    }

    erro() {
        this.erros++
    }

    getPontuacao() {
       return this.acertos;
    }
}

class Pergunta {
    constructor(bandeira1, bandeira2, bandeira3, bandeiraCerta) {
        this.bandeira1 = bandeira1;
        this.bandeira2 = bandeira2;
        this.bandeira3 = bandeira3;
        this.bandeiraCerta = bandeiraCerta;
    }
}

let pergunta1 = new Pergunta("França", "Escócia", "Guatemala", "Israel");
let pergunta2 = new Pergunta("Jordânia", "San Marino", "Itália", "Escócia");
let pergunta3 = new Pergunta("Reino Unido", "Áustria", "Honduras", "Tailândia");
let pergunta4 = new Pergunta("Arábia Saudita", "Qatar", "Quênia", "Russia");
let pergunta5 = new Pergunta("Taiwan", "Dinamarca", "Suécia", "Angóla");
let pergunta6 = new Pergunta("Uruguai", "Marrocos", "Vietnam", "Kosovo");
let pergunta7 = new Pergunta("Camarões", "Suiça", "Eslovênia", "Portugal");
let pergunta8 = new Pergunta("Finlândia", "Jamaica", "Estados Unidos", "Egito");
let pergunta9 = new Pergunta("Noruega", "Irlanda", "Canadá", "México");
let pergunta10 = new Pergunta("Somália", "China", "Coreia do Sul", "Japão");
let pergunta11 = new Pergunta("Afeganistão", "Espanha", "Inglaterra", "Brasil");
let pergunta12 = new Pergunta("Coreia do Norte", "Hong Kong", "Nepal", "Nova Zelândia");
let pergunta13 = new Pergunta("Índia", "Venezuela", "Singapura", "País de Gales");

let listaPerguntas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5,
                    pergunta6, pergunta7, pergunta8, pergunta9, pergunta10, pergunta11, pergunta12, pergunta13];

let embaralhar = (arr = []) => {
    let arrayLenght = arr.length;
    while(--arrayLenght >= 0) {
        let randIndex = Math.floor(Math.random()*(arrayLenght+1));

        [arr[arrayLenght], arr[randIndex]] = [arr[randIndex], arr[arrayLenght]];
    }
        return arr;
}

let perguntasNoJogo = embaralhar(listaPerguntas)

console.log(`PERGUNTA 1: \n\nFOTO: ${perguntasNoJogo[0].bandeiraCerta}\n\n${perguntasNoJogo[0].bandeira1} | ${perguntasNoJogo[0].bandeiraCerta}\n | ${perguntasNoJogo[0].bandeira2} | ${perguntasNoJogo[0].bandeira3}`);








