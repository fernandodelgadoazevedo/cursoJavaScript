// Vamos fazer uma referencia a classe Date
let tempo = new Date()
console.log(tempo.getDay());
console.log(tempo.getDate());
console.log(tempo.getMonth());

switch(tempo.getDay()) {
    case 0:
        console.log("Domingo");
        break;
    case 1: 
        console.log("Segunda-Feira");
        break;
    case 2:
        console.log("Terça-Feira");
        break;
    case 3:
        console.log("Quarta-Feira");
        break;
    case 4:
        console.log("Quinta-Feira");
        break;
    case 5:
        console.log("Sexta-Feira");
        break;
    default:
        console.log("Sábado");
        break;
}