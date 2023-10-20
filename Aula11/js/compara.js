const url_filmes =
  "https://api.themoviedb.org/3/movie/popular?api_key=e8ee1b7136ab091a2fb872089bf3c840&language=pt-BR&page=1";
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

  //realizar a chamada da api e tratar os dados que retornam

  //utilzaremos o comando fetch(buscar) e, este comando é uma

  //promise. Sendo assim, ele tem 2 elementos de retorno:

  //1-Resolve : then e o 2-Reject -> catch

  //Quanto tudo dá certo, temos um resolve e quanto temos erro

  //retorna o reject

  fetch(url_filmes)
    .then((response) => response.json())

    .then((saida) => {
      console.log(saida.results);

      saida.results.map((item) => {
        let divFilme = document.createElement("div");
        divFilme.setAttribute("class", "divfilme");
        let imgFilme = document.createElement("img");

        imgFilme.src = `${url_img}${item.poster_path}`;

        imgFilme.setAttribute("class", "imgfilme");
        let tituloFilme = document.createElement("h2");
        tituloFilme.innerHTML = item.title;
        let lancamento = document.createElement("h4");

        lancamento.innerHTML = item.release_date;

        divFilme.appendChild(imgFilme);

        divFilme.appendChild(tituloFilme);

        divFilme.appendChild(lancamento);

        divFilme.onclick = () => {
          detalheFilme(item.id);
        };

        main.appendChild(divFilme);
      });
    })

    .catch((erro) => console.error(`Erro ao carregar a api ${erro}`));

  //Adicionar as áreas header, main e footer ao body

  body.appendChild(header);
  body.appendChild(main);
  body.appendChild(footer);
}

let divSombra = document.createElement("div");

let divBranca = document.createElement("div");

let fechar = document.createElement("a");

let divCamada = document.createElement("div");

let divCapa = document.createElement("div");

divCapa.className = "divCapa";

let divInfo = document.createElement("div");

divInfo.className = "divsnfo";

let imgCapa = document.createElement("img");

let title = document.createElement("h2");

function detalheFilme(idfilme) {
  const detalhe_filme = `https://api.themoviedb.org/3/movie/${idfilme}?api_key=e8ee1b7136ab091a2fb872089bf3c840&language=pt-BR`;

  divSombra.style.width = "100vw";

  divSombra.style.height = "100vh";

  divSombra.style.position = "fixed";

  divSombra.style.zIndex = "10000";

  divSombra.style.backgroundColor = "rgba(0,0,0,0.7)";

  divSombra.style.top = "0px";

  divSombra.style.left = "0px";

  divSombra.style.display = "flex";

  divSombra.style.justifyContent = "center";

  divSombra.style.alignItems = "center";

  divBranca.style.width = "70vw";

  divBranca.style.height = "60vh";

  fechar.href = "#";

  fechar.innerHTML = "&times;";

  //Chamando a classe fechar que está no arquivo css e formata ao botão fechar

  fechar.className = "fechar";

  fechar.onclick = () => {
    fecharDetalhe();
  };

  divCamada.className = "divCamada";

  divCamada.appendChild(fechar);

  divBranca.appendChild(divCamada);

  //realizar a chamada da api com os dados do filme específico

  fetch(detalhe_filme)
    .then((response) => response.json())

    .then((rs) => {
      divBranca.style.backgroundImage = `url(${url_img}${rs.backdrop_path})`;

      divBranca.style.backgroundSize = "cover";

      divBranca.style.backgroundRepeat = "no-repeat";

      imgCapa.src = `${url_img}${rs.poster_path}`;

      divCapa.appendChild(imgCapa);

      divCamada.appendChild(divCapa);

      title.innerHTML = rs.title;

      divInfo.innerHTML += rs.release_date;

      divInfo.innerHTML += rs.genres[0].name;

      divInfo.innerHTML += rs.genres[1].name;

      divInfo.appendChild(title);

      divCamada.appendChild(divInfo);
    })

    .catch((erro) => console.error(`Erro ao carregar o filme ${erro}`));

  divSombra.appendChild(divBranca);

  body.appendChild(divSombra);
}

function fecharDetalhe() {
  divCamada.removeChild(fechar);

  divBranca.removeChild(divCamada);

  divSombra.removeChild(divBranca);

  body.removeChild(divSombra);
}
