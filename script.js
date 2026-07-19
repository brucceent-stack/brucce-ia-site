const botoes = document.querySelectorAll(".botaoContato");

const mensagem = document.getElementById("mensagem");


botoes.forEach(function(botao) {

    botao.addEventListener("click", function(evento) {

        evento.preventDefault();

        mensagem.textContent = 
        "Obrigado pelo contacto! A Brucce IA está pronta para ajudar o seu negócio.";

    });

});