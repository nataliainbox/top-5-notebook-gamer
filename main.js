const botoes = document.querySelectorAll(".botao")
const textos = documents.querySelectorAll
console.log(textos)

for(let i =0;i<botoes.length;i++){
    console.log(botoes[i])
    botoes[i].onclick = function(){
        for(let j =0;j<botoes.length;j++){
        botoes[j].classList.remove('ativo')
        }    
        botoes[i].classList.add('ativo');
        texto[i].classList.add('ativo')
    }         
}
