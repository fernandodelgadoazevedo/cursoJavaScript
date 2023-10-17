 const numeros=[20,35,45,12];
 console.log(numeros);

 numeros.push(50);

 console.log(numeros);

 numeros.unshift(200);

 console.log(numeros);

 console.log("----Numeros adicionados pelo usuario");

 //var valores= prompt("Digite Numeros, separados por virgula(,)")

 console.log("Isso são valores "+valores);
// O comando split é responsavel por pegar uma string e analisa o separador de caracteres e assim dividir em um array
 const array_valores=valores.split(",");
 console.log("ISSO É ARRAY "+array_valores);

 // verifica o tipo dos elemntos valores e array_valores

 console.log(typeof valores);
 console.log(typeof array_valores);


 const lista_produtos=[["código", "nome", "preco"],["456", "Mouse", "3000"],["789", "Teclado", "4000"]];
 console.log(lista_produtos);

 lista_produtos.push(["0", "ssd", "10"]);
 console.log(lista_produtos);

 var novo_produto = prompt("Adicione o codigo, nome e preço, separados por (;)").split(";")
 lista_produtos.push(novo_produto)
 console.log(lista_produtos);