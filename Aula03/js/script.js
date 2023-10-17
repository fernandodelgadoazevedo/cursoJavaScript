//criar as variaveis para fazer referencia aos controles html

var txtnome = document.getElementById("txtNome")
var txtsalario = document.getElementById("txtSalario")
var txtinss = document.getElementById("txtInss")
var txtconvenio = document.getElementById("txtConvenio")
var txtfilhos = document.getElementById("txtFilhos")
var txtliquido = document.getElementById("txtLiquido")
var btncalcular = document.getElementById("btnCalcular")
var texto = document.getElementById("texto")


txtsalario.onclick = function(){
    texto.innerHTML = "Digite apenas o valor do salário sem R$"
};

txtinss.onclick = function(){
    var inss  = "de R$ 0,00 até R$ 1.320,00 -> 7,5% <br>"
        inss += "de R$ 1320,01 até R$ 2.571,29 -> 9,00% <br>"
        inss += "de R$ 2.571,30 até R$ 3.856,94	-> 12% <br>"
        inss += "de R$ 3.856,95 até R$ 7,507,49	->14%"
    texto.innerHTML = inss;
}

txtconvenio.onclick = function(){
    texto.innerHTML = "Salário até R$2.500 o desconto é de 5%, caso contrario o desconto será de 7,50%"
    
}

txtfilhos.onclick = function(){
    texto.innerHTML = "Se o funcionario não tem filhos, não receberá, caso contrario receberá 5% do salário por filho"
}

btncalcular.onclick = function() {
    var rsinss
    var rsconvenio
    var rsfilhos
    var rsliquido

    if      (txtsalario.value <= 1320){
        rsinss = txtsalario.value * (7.5/100)
    }
    else if(txtsalario.value <= 2571.29){
        rsinss = txtsalario.value * (9/100)
    }
    else if(txtsalario.value <= 3856.94){
        rsinss = txtsalario.value * (12/100)
    }
    else if(txtsalario.value <= 7507.49){
        rsinss = txtsalario.value * (14/100)
    }   
    else {   rsinss = 7507.49 * (14/100)
    }

    if (txtconvenio.value <= 2500){
        rsconvenio = txtsalario.value * (5/100);
    }
    else{
        rsconvenio = txtsalario.value * (7.5/100);
    }

    txtliquido.value = rsinss

    if (txtfilhos.value == 0) {
        rsfilhos = 0}
        else {
            rsfilhos = txtsalario.value * (5/100) * txtfilhos.value
        }

        rsliquido = parseFloat(txtsalario.value)+rsfilhos-(rsinss+rsconvenio)
        txtliquido.value = rsliquido;

        txtinss.value = rsinss
        txtconvenio.value = rsconvenio
}