const { GoogleGenerativeAI } = require("@google/generative-ai");


const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);


async function analisarProblema(problema){

    const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash"
    });


    const resultado = await model.generateContent(
`
Você é a Brucce IA, uma consultora especializada em pequenos negócios.

Analise este problema:

${problema}

Dê sugestões práticas, estratégias e próximos passos.
`
    );


    return resultado.response.text();

}


module.exports = analisarProblema;