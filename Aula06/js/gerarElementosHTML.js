function gerarInputs(){
    //Vamos referenciar o documento HTML

    const body = document.body;

    //Cruar um elemento de titulo(h1)

    const h1 = document.createElement('h1');
    h1.innerHTML = "Criar Elementos"
    // Adicionar o elemento h1 no body
    body.appendChild(h1);// adicionar um elemento filho

// Criar um elemento de Formulario
const form = document.createElement('form');

//adicionar um atributo ao elemento form

form.setAttribute("id","cadastro");

var ninput = 0;
while(ninput <10){
    let caixa = document.createElement("input");
    // adicionar o atributo type
    caixa.setAttribute("type","text");

    // adicionar o atributo id
    caixa.setAttribute("id","caixa"+ninput);

    // adicionar o elemento input (caixa) ao form
    form.appendChild(caixa);
    
    ninput++;
    }

    //criar o css para as caixas input
    
    body.appendChild(form); // adicionar o formulario ao body
    for(let inp = 0 ; inp < 10; inp++){
        var estilo = document.getElementsByTagName("input")[inp].style;
        estilo.display = "block";
        estilo.width = "300px";
        estilo.height = "30px";
        estilo.margin = "10px";
        estilo.background = "black";
        estilo.color = "white";
        estilo.borderRadius = "5px";
        estilo.border = "none";
        estilo.padding = "10px";
        estilo.fontSize = "20px";
        estilo.fontWeight = "bold";

      

    }


}