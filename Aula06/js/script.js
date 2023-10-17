/*Pontos a se considerar sobre a estrutura de repetição
1 - Inicializar a variavel (Ponto de partida);
2 - Condição para repetição(true/false);
3 - Estrutura do corpo de execução;
4 - incrementação ou decrementação da variavel
*/
function while1 (condition) {
    //inicio da estrutura de repetição
    let init = 30;
    while(init <= 20){
        console.log(init);
        init++;
    }
}

function dowhile1 () {
    let i=0;
    do{
        console.log(i);
        i++;
    } while(i < 10);
}

function for1 () {

    for(let x=0; x <=10; x++) {
        console.log(x);
    }
}