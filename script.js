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


    alert(
        "Obrigado " + nome + "! Recebemos o seu pedido."
    );

});