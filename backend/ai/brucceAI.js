const OpenAI = require("openai");


const client = new OpenAI({

    apiKey: process.env.OPENAI_API_KEY

});


async function analisarProblema(problema){

    const resposta = await client.responses.create({

        model: "gpt-4.1-mini",

        input:
        `
Você é a Brucce IA, um consultor especializado em pequenos negócios.

Analise este problema:

${problema}

Dê sugestões práticas de melhoria.
`

    });


    return resposta.output_text;

}


module.exports = analisarProblema;