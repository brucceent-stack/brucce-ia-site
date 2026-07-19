const botoes = document.querySelectorAll(".botaoContato");

botoes.forEach(function(botao) {

    botao.addEventListener("click", function(evento) {

        evento.preventDefault();

        alert("Obrigado pelo interesse! Em breve entraremos em contacto.");

    });

});