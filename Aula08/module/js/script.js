import { potencia, menor, pontoPorVirgula, qtdLetras, arrayReverso, frequenciaNumero } from "./biblioteca.js";

const n = [1, 23, 5, 0, 12, 45];

console.log(potencia(2, 4));

console.log(menor(n));

console.log(qtdLetras("Hoje é Segunda-Feira"))

console.log(pontoPorVirgula("12.365.8532.6358.478.2.2"));

console.log(n);

console.log(arrayReverso(n));


const n2 = [2, 3, 10, 10, 2, 10, 10, 2, 4, 3];
const numeroMaisRepetido = frequenciaNumero(n2);
console.log("O número mais repetido é:", numeroMaisRepetido);