let txtano=document.getElementById("txtano");
let btn=document.getElementById("btnverificar");
let rs=document.getElementById("rs");

btnverificar.onclick=function(){
//    if(txtano.value % 4 == 0){
//        rs.innerHTML ="Este ano é Bissexto";
//    }
//
//    else{
//        rs.innerHTML ="Este ano não é Bissexto";
//    }
    
rs.innerHTML = txt.value % 4 == 0 ? "Este ano é Bissexto" :	"Este ano não é Bisse";
}

