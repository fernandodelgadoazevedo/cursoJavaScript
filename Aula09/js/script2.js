/*
let x = 10
const primeiro = new Promise(function (resolve, reject) {


    if (x > 20) {
        resolve("Esta funcionando");

    } else {
        reject("Deu Erro");

    }

});

const body = document.body;
const btn = document.createElement("button");
btn.innerHTML = "Clique";
btn.onclick = () => {
    primeiro.then((rs) => console.log(rs)).cath((erro) => console.log(erro));

};

body.appendChild(btn);
*/

let user = "";
let pass = "";

function logar() {
    return new Promise((resolve, reject) => {
        if (user == "admin" && pass == "123") {
            resolve(
                {
                    nome: "Administrador",
                    user: "admin",
                    email: "admin@administrador.com"
                }
            )
        }
        else {
            reject({
                erro_numero: "41214",
                erro_nome: "Usuario ou Senha Invalidos",
            })
        }
    })
}
const body = document.body;
const btn2 = document.createElement("button");
btn2.innerHTML = "Logar no Sistema";
btn2.onclick = () => {
    user = prompt("Digite o nomero do usuario")
    pass = prompt("Digite a Senha")

    logar()
    .then((rs)=> console.log(rs))
    .catch((err)=> console.log(err));
}
body.appendChild(btn2);