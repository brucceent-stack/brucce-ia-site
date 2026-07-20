const express = require("express");

const app = express();


app.use(express.json());


app.get("/", function(req, res){

    res.send("Servidor Brucce IA funcionando!");

});


app.post("/analise", function(req, res){

    const problema = req.body.problema;


    res.json({

        resposta:
        "Recebi seu problema: " + problema

    });

});


app.listen(3000, function(){

    console.log("Servidor rodando na porta 3000");

});