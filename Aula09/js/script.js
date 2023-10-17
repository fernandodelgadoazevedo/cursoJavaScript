/*
UTILIZAR UMA FUNÇÃO PARA ESCREVER NO CONSOLE LOG
*/

//let n = 0;
//function msg(){
//    console.log(`Contei: ${n}`)
//    n++;
//}

//window.setInterval(msg, 1500)

//window.setTimeout((msg, 5000)


//window.setInterval(function(){
//    console.log(`Agora N vale: ${n}`)
//    n++
// },1500)


//window.setInterval(() => {
//    console.log(`Valor de "N" agora é: ${n}`)
//   
//    n++
//},1000)



const cidades = ["Leme", "Guarulhos", "Itu", "Campinas", " Caieiras"]
//console.log(cidades[1].toLocaleUpperCase());

let p = 1;
function saida (nome_cidades){
    console.log(`${p} - ${nome_cidades.toUpperCase()}`)
    p++;
}

//cidades.forEach(saida)


cidades.forEach((nome_cidades)=>{
    console.log(`${p} - ${nome_cidades.toUpperCase()}`)
})