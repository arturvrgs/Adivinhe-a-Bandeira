let botaoPais = document.querySelectorAll('.botao__escolha')
let imgPais = document.getElementById("foto");
let pontosTexto = document.getElementById("pontos")
let proxima = document.getElementById('next')
class Jogador {
    constructor() {
        this.acertos = 0;       
    }

    acerto() {
        this.acertos++
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
let pergunta13 = new Pergunta("Índia", "Venezuela", "Cingapura", "País de Gales");
let pergunta14 = new Pergunta("Egito", "Suécia", "Alemanha", "Austrália");
let pergunta16 = new Pergunta("China", "Tailândia", "Brasil", "Dinamarca");
let pergunta17 = new Pergunta("Chile", "Holanda", "Singapura", "Malásia");
let pergunta18 = new Pergunta("Suíça", "Inglaterra", "Nigéria", "Costa Rica");
let pergunta19 = new Pergunta("Polônia", "Ucrânia", "Vietnã", "Bélgica");
let pergunta20 = new Pergunta("Turquia", "Croácia", "Filipinas", "Hungria");
let pergunta21 = new Pergunta("Israel", "Colômbia", "Nova Zêlandia", "Estados Unidos");

let listaPerguntas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5,
    pergunta6, pergunta7, pergunta8, pergunta9, pergunta10, 
    pergunta11, pergunta12, pergunta13, 
    pergunta16, pergunta17, pergunta18, pergunta19, pergunta20,
    pergunta21];

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
                case "Austrália":
                    imgPais.src = "australia.png";
                    botaoPais[0].innerHTML = arrayFinal[0].bandeiraCerta;
                    botaoPais[1].innerHTML = arrayFinal[0].bandeira1;
                    botaoPais[2].innerHTML = arrayFinal[0].bandeira2;
                    botaoPais[3].innerHTML = arrayFinal[0].bandeira3;
                    break;
            
                case "Argentina":
                imgPais.src = "argentina.png";
                botaoPais[0].innerHTML = arrayFinal[0].bandeiraCerta;
                botaoPais[1].innerHTML = arrayFinal[0].bandeira1;
                botaoPais[2].innerHTML = arrayFinal[0].bandeira2;
                botaoPais[3].innerHTML = arrayFinal[0].bandeira3;
                case "Dinamarca":
                imgPais.src = "denmark.png";
                botaoPais[0].innerHTML = arrayFinal[0].bandeiraCerta;
                botaoPais[1].innerHTML = arrayFinal[0].bandeira1;
                botaoPais[2].innerHTML = arrayFinal[0].bandeira2;
                botaoPais[3].innerHTML = arrayFinal[0].bandeira3;
                break;
                case "Malásia":
                imgPais.src = "malaysia.png";
                botaoPais[0].innerHTML = arrayFinal[0].bandeira1;
                botaoPais[1].innerHTML = arrayFinal[0].bandeiraCerta;
                botaoPais[2].innerHTML = arrayFinal[0].bandeira3;
                botaoPais[3].innerHTML = arrayFinal[0].bandeira2;
                break;
                case "Costa Rica":
                imgPais.src = "costa-rica.png";
                botaoPais[0].innerHTML = arrayFinal[0].bandeira3;
                botaoPais[1].innerHTML = arrayFinal[0].bandeira2;
                botaoPais[2].innerHTML = arrayFinal[0].bandeira1;
                botaoPais[3].innerHTML = arrayFinal[0].bandeiraCerta;
                break;
                case "Bélgica":
                imgPais.src = "belgium.png";
                botaoPais[0].innerHTML = arrayFinal[0].bandeira2;
                botaoPais[1].innerHTML = arrayFinal[0].bandeiraCerta;
                botaoPais[2].innerHTML = arrayFinal[0].bandeira3;
                botaoPais[3].innerHTML = arrayFinal[0].bandeira1;

                break;
                case "Hungria":
                imgPais.src = "hungary.png";
                botaoPais[0].innerHTML = arrayFinal[0].bandeira2;
                botaoPais[1].innerHTML = arrayFinal[0].bandeira3;
                botaoPais[2].innerHTML = arrayFinal[0].bandeiraCerta;
                botaoPais[3].innerHTML = arrayFinal[0].bandeira1;

                break;
                case "Estados Unidos":
                imgPais.src = "united-states.png";
                botaoPais[0].innerHTML = arrayFinal[0].bandeira1;
                botaoPais[1].innerHTML = arrayFinal[0].bandeiraCerta;
                botaoPais[2].innerHTML = arrayFinal[0].bandeira3;
                botaoPais[3].innerHTML = arrayFinal[0].bandeira2;

                break;
        }   
}
let jogador = new Jogador();
function inicializarPontuacao() {
    const pontuacaoArmazenada = localStorage.getItem('pontuacao');

    if (pontuacaoArmazenada) {
        jogador.acertos = parseInt(pontuacaoArmazenada);
        pontosTexto.innerHTML = `Pontuação: ${jogador.acertos}`;
    }
}

window.addEventListener('load', inicializarPontuacao);

botaoPais.forEach(e => {
    
    e.addEventListener("click", evento => {
        
        proxima.style.display = "flex"

        if (e.innerHTML == arrayFinal[0].bandeiraCerta) {
            e.style.backgroundColor = "darkgreen";
        
            botaoPais.forEach(botao => {
                botao.setAttribute('disabled', '');
            });
        
            jogador.acertos++;
            pontosTexto.innerHTML = `Pontuação: ${jogador.acertos}`;
        
            localStorage.setItem('pontuacao', jogador.acertos);
        }
         else {
            e.style.backgroundColor = "darkred"
           
            botaoPais.forEach(botao => {
                botao.setAttribute('disabled', '');
            })
            
        }
    })
})

document.addEventListener("DOMContentLoaded", function () {
    Perguntas();
});






