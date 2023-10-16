let botaoPais = document.querySelectorAll('.botao__escolha')
let imgPais = document.getElementById("foto");
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
let pergunta5 = new Pergunta("Taiwan", "Dinamarca", "Suécia", "Angola");
let pergunta6 = new Pergunta("Uruguai", "Marrocos", "Vietnam", "Kosovo");
let pergunta7 = new Pergunta("Camarões", "Suiça", "Eslovênia", "Portugal");
let pergunta8 = new Pergunta("Finlândia", "Jamaica", "Estados Unidos", "Egito");
let pergunta9 = new Pergunta("Noruega", "Irlanda", "Canadá", "México");
let pergunta10 = new Pergunta("Somália", "China", "Coreia do Sul", "Japão");
let pergunta11 = new Pergunta("Afeganistão", "Espanha", "Inglaterra", "Colombia");
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

let arrayFinal = embaralhar(listaPerguntas)

function Perguntas() {

        switch (arrayFinal[0].bandeiraCerta) {
            case "Israel":
                imgPais.src = "israel.png";
                botaoPais[0].innerHTML = arrayFinal[0].bandeira1;
                botaoPais[1].innerHTML = arrayFinal[0].bandeiraCerta;
                botaoPais[2].innerHTML = arrayFinal[0].bandeira3;
                botaoPais[3].innerHTML = arrayFinal[0].bandeira2;

                break;
            case "Escócia":
                imgPais.src = "scotland (1).png";
                botaoPais[0].innerHTML = arrayFinal[0].bandeiraCerta;
                botaoPais[1].innerHTML = arrayFinal[0].bandeira1;
                botaoPais[2].innerHTML = arrayFinal[0].bandeira2;
                botaoPais[3].innerHTML = arrayFinal[0].bandeira3;


                break;
            case "Tailândia":
                imgPais.src = "thailand.png";
                botaoPais[0].innerHTML = arrayFinal[0].bandeira3;
                botaoPais[1].innerHTML = arrayFinal[0].bandeira2;
                botaoPais[2].innerHTML = arrayFinal[0].bandeira1;
                botaoPais[3].innerHTML = arrayFinal[0].bandeiraCerta;

                break;
            case "Russia":
                imgPais.src = "russia.png";
                botaoPais[0].innerHTML = arrayFinal[0].bandeira2;
                botaoPais[1].innerHTML = arrayFinal[0].bandeira3;
                botaoPais[2].innerHTML = arrayFinal[0].bandeiraCerta;
                botaoPais[3].innerHTML = arrayFinal[0].bandeira1;

                break;
            case "Angola":
                imgPais.src = "angola.png";
                botaoPais[0].innerHTML = arrayFinal[0].bandeira2;
                botaoPais[1].innerHTML = arrayFinal[0].bandeiraCerta;
                botaoPais[2].innerHTML = arrayFinal[0].bandeira3;
                botaoPais[3].innerHTML = arrayFinal[0].bandeira1;

                break;
            case "Kosovo":
                imgPais.src = "kosovo.png";
                botaoPais[0].innerHTML = arrayFinal[0].bandeira3;
                botaoPais[1].innerHTML = arrayFinal[0].bandeira1;
                botaoPais[2].innerHTML = arrayFinal[0].bandeira2;
                botaoPais[3].innerHTML = arrayFinal[0].bandeiraCerta;

                break;
            case "Portugal":
                imgPais.src = "portugal.png";
                botaoPais[0].innerHTML = arrayFinal[0].bandeira3;
                botaoPais[1].innerHTML = arrayFinal[0].bandeira2;
                botaoPais[2].innerHTML = arrayFinal[0].bandeira1;
                botaoPais[3].innerHTML = arrayFinal[0].bandeiraCerta;
                break;
            case "Egito":
                imgPais.src = "egypt.png";
                botaoPais[0].innerHTML = arrayFinal[0].bandeira2;
                botaoPais[1].innerHTML = arrayFinal[0].bandeiraCerta;
                botaoPais[2].innerHTML = arrayFinal[0].bandeira3;
                botaoPais[3].innerHTML = arrayFinal[0].bandeira1;

                break;
            case "México":
                imgPais.src = "mexico.png";
                botaoPais[0].innerHTML = arrayFinal[0].bandeiraCerta;
                botaoPais[1].innerHTML = arrayFinal[0].bandeira1;
                botaoPais[2].innerHTML = arrayFinal[0].bandeira2;
                botaoPais[3].innerHTML = arrayFinal[0].bandeira3;
                break;
            case "Japão":
                imgPais.src = "japan.png";
                botaoPais[0].innerHTML = arrayFinal[0].bandeira1;
                botaoPais[1].innerHTML = arrayFinal[0].bandeiraCerta;
                botaoPais[2].innerHTML = arrayFinal[0].bandeira3;
                botaoPais[3].innerHTML = arrayFinal[0].bandeira2;
                break;
            case "Colombia":
                imgPais.src = "colombia.png";
                botaoPais[0].innerHTML = arrayFinal[0].bandeira3;
                botaoPais[1].innerHTML = arrayFinal[0].bandeira1;
                botaoPais[2].innerHTML = arrayFinal[0].bandeira2;
                botaoPais[3].innerHTML = arrayFinal[0].bandeiraCerta;
                break;
                case "Nova Zelândia":
                    imgPais.src = "new-zealand.png";
                    botaoPais[0].innerHTML = arrayFinal[0].bandeira2;
                    botaoPais[1].innerHTML = arrayFinal[0].bandeira3;
                    botaoPais[2].innerHTML = arrayFinal[0].bandeiraCerta;
                    botaoPais[3].innerHTML = arrayFinal[0].bandeira1;

                    break;
                case "País de Gales":
                    imgPais.src = "wales.png";
                    botaoPais[0].innerHTML = arrayFinal[0].bandeiraCerta;
                    botaoPais[1].innerHTML = arrayFinal[0].bandeira1;
                    botaoPais[2].innerHTML = arrayFinal[0].bandeira2;
                    botaoPais[3].innerHTML = arrayFinal[0].bandeira3;

                    break;
        }   
}


document.addEventListener("DOMContentLoaded", function () {
    Perguntas();
    
});






