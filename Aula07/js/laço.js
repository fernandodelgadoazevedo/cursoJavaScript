// function message() {
//     document.body.innerHTML = `<p>Olá Mundos</p>`;

// }

// document.body.onload = message
// function message2(nome) {
//     let n = nome || "Visitante"

//     document.body.innerHTML += `<strong>Olá ${n}</strong>`;
// }

// document.body.onclick. = function (){
//     message2(`Paulo`);
// };


const body = document.body;

function dataHora(){
    let tempo = new Date();
    let relogio = `${tempo.getHours()} : ${tempo.getMinutes()} : ${tempo.getSeconds()}`
    return tempo.toLocaleDateString() + " - " +relogio;    
}

body.onload = function () {
    const h1 = document.createElement("h1");
    h1.innerHTML = dataHora()
    body.appendChild(h1);
    
}

// const foto = document.getElementsByTagName("img")[0];
// foto.onmouseover = function () {
//     foto.style.opacity = "0.5";
// }

function opacidade05 (obj){
    obj.style.opacity = "0.5";
  
}

function opacidade1 (obj){
    obj.style.opacity = "1";
   
}



const foto = document.getElementsByTagName("img")[0];
const foto1 = document.getElementsByTagName("img")[1];
foto.onmouseover = function(){
    opacidade05(foto);

}
foto.onmouseout = function(){
    opacidade1(foto);

}

foto1.onmouseover = function(){
    opacidade05(foto1);
    
}

foto1.onmouseout = function(){
    opacidade1(foto1);
    
}