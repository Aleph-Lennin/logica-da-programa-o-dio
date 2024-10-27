//Desafio Classificador de nível de Herói
//Desafio DIO

let heroi = "Guerreiro Alado"
let xp = 11300
let nivel = ""

switch (true){
    case xp < 1000 : 
    nivel = "Ferro"
    console.log("O heroi de nome " + heroi + " está no nivel de " + nivel);
    break

    case xp < 2000 :
    nivel = "Bronze"
    console.log("O heroi de nome " + heroi + " está no nivel de " + nivel);
    break

    case xp < 5000 :
    nivel = "Prata"
    console.log("O heroi de nome " + heroi + " está no nivel de " + nivel);
    break 

    case xp < 7000 :
    nivel = "Ouro"
    console.log("O heroi de nome " + heroi + " está no nivel de " + nivel);
    break

    case xp < 8000 :
    nivel = "Platina"
    console.log("O heroi de nome " + heroi + " está no nivel de " + nivel);
    break

    case xp < 9000 :
    nivel = "Acendente"
    console.log("O heroi de nome " + heroi + " está no nivel de " + nivel);
    break

    case xp < 10000 :
    nivel = "Imortal"
    console.log("O heroi de nome " + heroi + " está no nivel de " + nivel);
    break

    default: nivel = "Radiante"
    console.log("O heroi de nome " + heroi + " está no nivel de " + nivel)
    console.log("Parabéns " + heroi + " você atingiu o nivel maximo !")
}