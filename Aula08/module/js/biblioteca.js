/*
 Estamos utilizado o comando export para realizar a importação das 
 funções de dentro de arquivos  js e assim utilizar uma chamada de script no arquivo html
*/

export const potencia = function (base, exp) {
    let b = base
    for (let i = 1; i < exp; i++) {
        base *= b;
    }
    return base;
};

export const menor = function (array) {
    let m = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < m) {
            m = array[i];
        }
    }
    return m;

}

export const qtdLetras = function (texto) {
    return texto.length;
}

export const pontoPorVirgula = function (texto) {
    let rs = texto;
    for (let i = 0; i < texto.length; i++) {
        rs = rs.replace(".", ",");
    }

    return rs;
};

// arrow functions




export const arrayReverso = (array) => {
    let reverso = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverso.push(array[i]);
    }
    return reverso;

}



export const frequenciaNumero = (array) => {

    // array para ajudar na contagem de cada número
    let contagem = [];

    // Variáveis para rastrear o número mais repetido e da contagem
    let numeroMaisRepetido;
    let contagemMaisRepetida = 0;

    // contagem do array e atualiza a contagem para cada número
    for (let i = 0; i < array.length; i++) {
        let numero = array[i];

        // Se o número ainda não estiver no array de contagem, inicialize-o com 1
        if (!contagem[numero]) {
            contagem[numero] = 1;
        } else {

            // Se o número já estiver no array de contagem, incremente a contagem
            contagem[numero]++;
        }
        // Verifique se a contagem atual é maior do que a contagem mais repetida
        if (contagem[numero] > contagemMaisRepetida) {
            numeroMaisRepetido = numero;
            contagemMaisRepetida = contagem[numero];
        }

    }

    return numeroMaisRepetido;

};