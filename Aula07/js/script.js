// Referencia ao body do documento html

const body = document.body;

function msg(){
    console.log("Hello World");
}

function array1(){
    const n1= [10, 25, 30, 40, 60, 50,];
    let rs = 0;
    for(let i = 0; i < n1.length; i++){
        rs += n1[i];
    }        
    console.log(n1);
    console.log("Resultado da Soma "+rs);
}


function maiorvlr(){
    const n1 = [10, 25, 30, 40, 60, 50,]
    let m = n1[0];
    for (let i = 1; i < n1.length; i++){
        if(n1[i] > m){
            m = n1[i];
        }
    }
    console.log(n1);
    console.log("Maior valor do Array é "+ m);


    }


    function calculate(){

        let numeros=prompt("Digite numeros separados por virgula(,)")
        numeros = numeros.split(",");
        console.log(numeros);

        let rs = 0;
        for(let i=0; i<numeros.length; i++){
            rs +=parseInt(numeros+[i]);
            console.log(rs);
        }
        let m = numeros [0]
        for (let i=1; i < numeros.length; i++){
            if(numeros[i] > m){
                m = numeros[i];
            }
        }
        console.log(`A soma resultou em ${rs} e o maior valor é ${m}`)
    }

body.onload = calculate;