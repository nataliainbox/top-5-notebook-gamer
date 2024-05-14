const botoes = document.querySelectorAll(".botao")
const textos = document.querySelectorAll(".aba-conteudo")

for(let i =0;i<botoes.length;i++){
    console.log(botoes[i])
    botoes[i].onclick = function(){
        for(let j =0;j<botoes.length;j++){
            console.log("textos[j]")
            botoes[j].classList.remove('ativo')
            textos[j].classList.remove('ativo')
            console.log(textos[j])
        }       
        botoes[i].classList.add('ativo')
        textos[i].classList.add('ativo')
        
    }         
}

const contadores = document.querySelectorAll(".contador")
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
const tempoObjetivo2 = new Date("2023-12-05T00:00:00")
const tempoObjetivo3 = new Date("2023-12-05T00:00:00")
const tempoObjetivo4 = new Date("2023-12-05T00:00:00")
let tempoAtual = new Date()
contadores[0].textContent=calculaTempo(tempoObjetivo){
let tempoAtual = new DataTransfer();
let tempoFinal = tempoObjetivo - tempoAtual;
let segundos = 
let minutos = 
let horas = 
let dias = Math.floor(horas / 24);
}
segundos %= 60
minuto %= 60
horas %= 24

return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos ";
