fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(usuario) {
        console.log(usuario);
    });