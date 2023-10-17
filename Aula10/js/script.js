const url_filmes =
  "https://api.themoviedb.org/3/movie/popular?api_key=84a1287f4d54f6377abc7426dc06176f&language=pt-BR&page=1";

const url_img = "https://image.tmdb.org/t/p/w500";

//Fazer referência ao corpo da página
const body = document.body;

body.onload = () => {
  carregarFilmes();
};

function carregarFilmes() {
  const h1 = document.createElement("h1");
  h1.innerHTML = "Lista de Filmes";
  const header = document.createElement("header");
  const main = document.createElement("main");
  const footer = document.createElement("footer");
  header.appendChild(h1);


  //realizara chamada da api e tratar os dados que retornou
  //foi utilizado o comando fetch(buscar) e, este comando é uma promise. 
  //Sendo assim, ele tem 2 elementos de retorno:
  //1-Resolver then 
  //2-Reject -> catch
  //quando tudo da certo, temos um resolve e quando temos erro retornar reject

  fetch(url_filmes).then((response) => response.json()).then((saida) => {
    console.log(saida.results);
    saida.results.map((item) => {
      let divFilme = document.createElement("div");
      divFilme.setAttribute("class", "divfilme");
      let imgFilme = document.createElement("img");

      imgFilme.src = `${url_img}${item.poster_path}`;
      let tituloFilme = document.createElement("h2");
      imgFilme.setAttribute("class", "imgfilme");
      tituloFilme.innerHTML = item.title;
      let lancamento = document.createElement("h4");
      lancamento.innerHTML = item.release_date;

      divFilme.appendChild(imgFilme);
      divFilme.appendChild(tituloFilme);
      divFilme.appendChild(lancamento);

      divFilme.onclick = () => {
        detalheFilme();
      }
      main.appendChild(divFilme);

    });
  })

    .catch((erro) => console.error(`Erro ao carregar a api ${erro}`))


  //Adicionar as áreas header, main e footer ao body
  body.appendChild(header);
  body.appendChild(main);
  body.appendChild(footer);
}


function detalheFilme() {
  const detalhe_Filme = "https://api.themoviedb.org/3/movie/575264?api_key=84a1287f4d54f6377abc7426dc06176f&language=pt-BR"
  
  let divSombra = document.createElement("div");
  divSombra.style.width = "100vw";
  divSombra.style.height = "100vh";
  divSombra.style.position = "fixed";
  divSombra.style.zIndex = "10000";
  divSombra.style.backgroundColor = "rgba(0,0,0,0.8888)";
  divSombra.style.top = "0px";
  divSombra.style.left = "0px";
  divSombra.style.display = "flex";
  divSombra.style.justifyContent = "center";
    divSombra.style.alignItems = "center";


  let divBranca = document.createElement("div");
  divBranca.style.width = "70vw";
  divBranca.style.height = "90vh";
  divBranca.style.backgroundColor = "white";
  divBranca.style.borderRadius = "10px"
  divBranca.style.border = "1px solid red"

  divSombra.appendChild(divBranca);

  body.appendChild(divSombra);
}