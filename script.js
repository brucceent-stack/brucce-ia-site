const botoes = document.querySelectorAll(".botaoContato");

const mensagem = document.getElementById("mensagem");


botoes.forEach(function(botao) {

    botao.addEventListener("click", function(evento) {

        evento.preventDefault();

        mensagem.textContent = 
        "Obrigado pelo contacto! A Brucce IA está pronta para ajudar o seu negócio.";

    });

});
const formulario = document.getElementById("formulario");


formulario.addEventListener("submit", function(evento){

    evento.preventDefault();


    const nome = document.getElementById("nome").value;

localStorage.setItem("cliente", nome);


alert(
"Obrigado " + nome + "! Seu pedido foi registrado."
);

});
const botaoAnalisar = document.getElementById("analisar");

const resposta = document.getElementById("resposta");

botaoAnalisar.addEventListener("click", function () {

    const problema = document.getElementById("problema").value;

    if (problema.trim() === "") {

        resposta.textContent = "Descreva primeiro o problema.";

        return;
    }

    fetch("http://localhost:3000/analise", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({

        problema: problema

    })

})

.then(function(respostaServidor){

    return respostaServidor.json();

})

.then(function(dados){

    resposta.textContent = dados.resposta;

});
"1. Melhorar presença digital.\n" +
"2. Criar automações para economizar tempo.\n" +
"3. Usar estratégias de marketing para atrair clientes.";

});