const diviniciar = document.getElementById("diviniciar")
const divareajogo = document.getElementById("areajogo")
const area = document.getElementById("areaperguntas")

const perguntas = [
    "Qual é o maior deserto do mundo?",
    "Qual é a capital do Brasil?",
    "Qual é a capital da Austrália?",
    "Qual é o país com maior população no mundo?",
    " Qual a linha imaginária que atravessa o Brasil?",
    "Qual o oceano que banha o Brasil?",
]
let indicedeperguntas = 0

//Funções

function iniciarjogo(){
    fecharbotaoinicio()
    abrirareadejogo()
}

function fecharbotaoinicio(){
    diviniciar.innerHTML = ""

}

function abrirareadejogo(){
    divareajogo.classList.add("active")

   let botaodepergunta = document.createElement("button")
   botaodepergunta.textContent = perguntas[indicedeperguntas]
   botaodepergunta.classList.add("answer-btn")
   area.appendChild(botaodepergunta)

}

function proximapergunta(){
    indicedeperguntas++
    if(indicedeperguntas < perguntas.length)
    abrirareadejogo()
else
alert("Não existe mais perguntas!")

}