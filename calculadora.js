let Calculo = ""

// Visor
let visor = document.getElementsByClassName("Visor")[0];

// Funções
let AC = document.getElementById("AC");
let Apagar = document.getElementById("Clear");

// Operadores

let Mult = document.getElementById("X");
let Divisor = document.getElementById("/");
let Subtracao = document.getElementById("-");
let Adicao = document.getElementById("+");
let Resto = document.getElementById("%");
let Virgula = document.getElementById(",");
let Result = document.getElementById("=");

// Números
let BotaoZero = document.getElementById("0");
let BotaoUm = document.getElementById("1");
let BotaoDois = document.getElementById("2");
let BotaoTres = document.getElementById("3");
let BotaoQuatro = document.getElementById("4");
let BotaoCinco = document.getElementById("5");
let BotaoSeis = document.getElementById("6");
let BotaoSete = document.getElementById("7");
let BotaoOito = document.getElementById("8");
let BotaoNove = document.getElementById("9");

let Valido = false

function Validar(){
  if(visor.textContent.substring(visor.textContent.length-1) == "X")Valido=false
  else if(visor.textContent.substring(visor.textContent.length-1) == "/")Valido=false
  else if(visor.textContent.substring(visor.textContent.length-1) == "-")Valido=false
  else if(visor.textContent.substring(visor.textContent.length-1) == "+")Valido=false
  else if(visor.textContent.substring(visor.textContent.length-1) == "%")Valido=false
  else if(visor.textContent == "0")Valido=false
  else Valido=true
}

// Evento Operadores

Mult.addEventListener("click", ()=>{
  Validar();

  if(Valido){
    visor.textContent += "X"
    Calculo += "*"
  }
})

Divisor.addEventListener("click", ()=>{
  Validar();

  if(Valido){
    visor.textContent += "/"
    Calculo += "/"
  }
})

Adicao.addEventListener("click", ()=>{
  Validar();

  if(Valido){
    visor.textContent += "+"
    Calculo += "+"
  }
})

Subtracao.addEventListener("click", ()=>{
  Validar();

  if(Valido){
    visor.textContent += "-"
    Calculo += "-"
  }
})

Resto.addEventListener("click", ()=>{
  Validar();

  if(Valido){
    visor.textContent += "%"
    Calculo += "%"
  }
})

Virgula.addEventListener("click", ()=>{
  if(visor.textContent.substring(visor.textContent.length-1) == ","){}
  else{
    visor.textContent += ","
    Calculo += "."
  }
})

Result.addEventListener("click",()=>{
  valor = eval(Calculo.toString())
  if(Number.isInteger(valor)){
    visor.textContent = valor
    Calculo = `${valor}`
  }
  else{
    Calculo = `${valor}`
    valor = valor.toString().replace(".",",")
    visor.textContent = valor
  }
})


// Evento Funções

Apagar.addEventListener("click",() => {
  if(visor.textContent.length == 1){
    visor.textContent = "0"
    Calculo = ""
  }
  else{
    visor.textContent = visor.textContent.substring(0, visor.textContent.length-1)
    Calculo = Calculo.substring(0,Calculo.length-1)
  }
})

AC.addEventListener("click",() => {
  visor.textContent = 0
  Calculo = ""
})


// Evento Números

BotaoZero.addEventListener("click", () => {
  if(visor.textContent == 0){
    visor.textContent = 0
    Calculo = "0"
  }
  else{
    visor.textContent += 0
    Calculo += "0"
  }
})
BotaoUm.addEventListener("click", () =>{
  if(visor.textContent == 0){
    visor.textContent = 1
    Calculo = "1"
  }
  else{
    visor.textContent += 1
    Calculo += "1"
  }
})
BotaoDois.addEventListener("click", () =>{
  if(visor.textContent == 0){
    visor.textContent = 2
    Calculo = "2"
  }
  else{
    visor.textContent += 2
    Calculo += "2"
  }
})
BotaoTres.addEventListener("click", () =>{
  if(visor.textContent == 0){
    visor.textContent = 3
    Calculo = "3"
  }
  else{
    visor.textContent += 3
    Calculo += "3"
  }
})
BotaoQuatro.addEventListener("click", () =>{
  if(visor.textContent == 0){
    visor.textContent = 4
    Calculo = "4"
  }
  else{
    visor.textContent += 4
    Calculo += "4"
  }
})
BotaoCinco.addEventListener("click", () =>{
  if(visor.textContent == 0){
    visor.textContent = 5
    Calculo = "5"
  }
  else{
    visor.textContent += 5
    Calculo += "5"
  }
})
BotaoSeis.addEventListener("click", () =>{
  if(visor.textContent == 0){
    visor.textContent = 6
    Calculo = "6"
  }
  else{
    visor.textContent += 6
    Calculo += "6"
  }
})
BotaoSete.addEventListener("click", () =>{
  if(visor.textContent == 0){
    visor.textContent = 7
    Calculo += "7"
  }
  else{
    visor.textContent += 7
    Calculo += "7"
  }
})
BotaoOito.addEventListener("click", () =>{
  if(visor.textContent == 0){
    visor.textContent = 8
    Calculo = "8"
  }
  else{
    visor.textContent += 8
    Calculo += "8"
  }
})
BotaoNove.addEventListener("click", () =>{
  if(visor.textContent == 0){
    visor.textContent = 9
    Calculo = "9"
  }
  else{
    visor.textContent += 9
    Calculo += "9"
  }
})
