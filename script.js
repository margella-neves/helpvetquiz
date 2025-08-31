// Função para remover acentos das palavras
function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Lista de plantas tóxicas
const plantasToxicas = [
    { nomes: ["comigo ninguem pode", "dieffenbachia"], 
      descricao:`<p>Essa planta é altamente tóxica para animais e humanos.</p>
      <p>Princípio tóxico: Oxalato de cálcio.</p>
      <p>Sinais clínicos: Pode causar irritação, inchaço e dificuldades respiratórias.</p>`},
    { nomes: ["lirio", "lirio do vale"], 
      descricao: `<p>Tóxica! O princípio tóxico não é totalmente conhecido.</p>
      <p>Extremamente perigoso para gatos, podendo causar falência renal.</p>`},
    { nomes: ["espada de sao jorge", "espada de ogum"], 
      descricao: `<p>Levemente tóxica. Pode causar irritação na boca e náusea.</p>
      <p>Princípio tóxico: Saponinas, oxalato de cálcio e alcaloides</p>` },
    { nomes: ["costela de adao", "monstera", "copo de leite", "anturio"], 
      descricao: `<p>Tóxica! Pode causar irritação na boca e trato digestivo.</p>
      <p>Princípio tóxico: Oxalato de cálcio.</p>` }
    // Adicione mais plantas conforme sua lista
];

// Função para verificar toxicidade da planta
function verificarToxicidade() {
    let nomePlanta = document.getElementById("nomePlanta").value.trim();
    if (nomePlanta === "") {
        document.getElementById("resultado").innerHTML = "⚠️ Por favor, digite o nome de uma planta.";
        document.getElementById("resultado").style.color = "red";
        return;
    }
    let nomePlantaNormalizado = removerAcentos(nomePlanta.toLowerCase());
    let plantaEncontrada = plantasToxicas.find(planta => 
        planta.nomes.some(nome => nome === nomePlantaNormalizado)
    );
    if (plantaEncontrada) {
        document.getElementById("resultado").innerHTML = `⚠️ <strong>Atenção!</strong> ${plantaEncontrada.descricao}`;
        document.getElementById("resultado").style.color = "red";
    } else {
        document.getElementById("resultado").innerHTML = `✅ Aparentemente, "${nomePlanta}" não está na lista de plantas tóxicas.`;
        document.getElementById("resultado").style.color = "green";
    }
}

// ----------------------
// Quiz / Gamificação
// ----------------------
const quizPerguntas = [
    {
        pergunta: "Qual planta pode causar falência renal em gatos?",
        opcoes: ["Lírio", "Espada de São Jorge", "Samambaia", "Tulipa"],
        resposta: "Lírio"
    },
    {
        pergunta: "Qual planta possui oxalato de cálcio e pode irritar boca e garganta?",
        opcoes: ["Costela de Adão", "Azaleia", "Ricinus", "Sorgo"],
        resposta: "Costela de Adão"
    },
    {
        pergunta: "Planta fotossensibilizante que causa lesões de pele?",
        opcoes: ["Stryphnodendron", "Dieffenbachia", "Samambaia", "Espada de São Jorge"],
        resposta: "Stryphnodendron"
    }
];

let pontuacao = 0;
let perguntaAtual = 0;

function iniciarQuiz() {
    pontuacao = 0;
    perguntaAtual = 0;
    document.getElementById("pontuacao").innerText = "";
    mostrarPergunta();
}

function mostrarPergunta() {
    const perguntaObj = quizPerguntas[perguntaAtual];
    let html = `<p>${perguntaObj.pergunta}</p>`;
    perguntaObj.opcoes.forEach(opcao => {
        html += `<button onclick="responderQuiz('${opcao}')">${opcao}</button>`;
    });
    document.getElementById("quiz").innerHTML = html;
}

function responderQuiz(resposta) {
    const correta = quizPerguntas[perguntaAtual].resposta;
    if (resposta === correta) {
        pontuacao++;
        alert("✅ Correto!");
    } else {
        alert(`❌ Errado! A resposta correta é: ${correta}`);
    }
    perguntaAtual++;
    if (perguntaAtual < quizPerguntas.length) {
        mostrarPergunta();
    } else {
        document.getElementById("quiz").innerHTML = `<p>Quiz finalizado!</p>`;
        document.getElementById("pontuacao").innerText = `Sua pontuação: ${pontuacao}/${quizPerguntas.length}`;
        if (pontuacao === quizPerguntas.length) {
            alert("🏆 Parabéns! Você ganhou a medalha de Mestre em Plantas Tóxicas!");
        }
    }
}
