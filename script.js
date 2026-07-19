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

    resposta.textContent =
        "Analisando... (na próxima aula essa resposta virá de uma IA).";

});