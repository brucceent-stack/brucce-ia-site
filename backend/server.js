require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());


app.get("/", function(req, res){

    res.send("Servidor Brucce IA funcionando!");

});


app.post("/analise", function(req, res){

    const problema = req.body.problema;


    const respostaIA = 
    `
Análise da Brucce IA:

Problema identificado:
${problema}


Sugestões:

1. Melhorar a presença digital do negócio.

2. Criar estratégias para atrair novos clientes.

3. Automatizar tarefas repetitivas para ganhar tempo.

4. Utilizar inteligência artificial para melhorar o atendimento.

Próximo passo:
Criar uma estratégia personalizada para esse negócio.
`;


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