require("dotenv").config();

const express = require("express");
const cors = require("cors");

const analisarProblema = require("./ai/brucceAI");
const app = express();

app.use(cors());

app.use(express.json());


app.get("/", function(req, res){

    res.send("Servidor Brucce IA funcionando!");

});


app.post("/analise", async function(req, res){

    const problema = req.body.problema;


    const respostaIA = await analisarProblema(problema);



    res.json({

        resposta: respostaIA

    });

});

app.get("/teste", function(req,res){

    res.send(process.env.CHAVE_TESTE);

});
app.listen(3000, function(){

    console.log("Servidor rodando na porta 3000");

});