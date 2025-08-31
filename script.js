// Função para remover acentos das palavras
function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Lista de plantas tóxicas 
const plantasToxicas = [
    { nomes: ["comigo ninguem pode", "dieffenbachia"], 
      descricao:` <p>Essa planta é altamente tóxica para animais e humanos.</p>
      <p>Princípio tóxico: Oxalato de cálcio.</p>
      <p>Sinais clínicos: Pode causar irritação, inchaço e dificuldades respiratórias.</p> `},

    { nomes: ["lirio", "lirio do vale"], 
      descricao: `<p>Tóxica! O princípio tóxico não é interamente conhecido, mas se sabe que está presente em todas as partes da planta.</p>
      <p>O lírio é extremamente perigoso para gatos, podendo causar falência renal.</p>`
      },

    { nomes: ["espada de sao jorge", "espada de ogum"], 
      descricao: `<p>Levemente tóxica. Pode causar irritação na boca e náusea em animais.</p>
      <p>Princípio tóxico: Saponinas, glicosídeos pregnâncios, oxalato de cálcio e alcaloides</p>` },

    { nomes: ["costela de adao", "monstera", "copo de leite", "anturio"], 
      descricao: `<p>Tóxica!</p>
      <p>Pode causar irritação na boca e no trato digestivo de cães e gatos.</p>
      <p>Princípio tóxico: Oxalato de cálcio.</p>` },

    { nomes: ["azaleia", "rododendro"], 
      descricao: `<p>Muito tóxica!
      <p>Pode causar vômitos, diarreia e problemas cardíacos em animais.</p>
      <p>Princípio tóxico: Grayantoxinas</p>` },

    { nomes: ["PALICOUREA MARCGRAVII", "cafezinho", "erva de rato", "cafe bravo", "roxa", "roxinha", "roxona", "vick"], 
      descricao: `<p>Muito tóxica! Elevada toxicidade e efeito cumulativo, tem boa palatabilidade.</p>
      <p>Princípio tóxico: Ácido monofuracético.</p>
      <P>Sinais clínicos: Desequilíbrio, tremores musculares, pedalagem, dispnéia, membros distendidos, taquicardia, 
      convulção e morte.</p>`},

    {nomes: ["mascagnia", "publifora", "rigida", "coriacea", "elegans", "carona", "timbo", "cipo prata", "tingui", "salsa rosa",
        "pela bucho", "quebra bucho","suma roxa", "suma", "rabo de tatu"],
        descricao: `<p>Tóxica, principalmente em fase de brotamento.</p>
        <p>Boa palatabilidade.</p>
        <p>Princípio Tóxico: Glicosídio digitálico.</p>
        <p>Sinais clínicos: Alterações cardíacas e neuromusculares de evolução superaguda, com morte súbita.</p>`},

    {nomes: ["cestrum","coerana","canema", "anilaoo", "dama da noite", "maria preta", "pimenteira"],
        descricao: 
        `<p> Tóxica!</p>
        <p>Princípio tóxico: Saponinas digitogeoxina e gitogenina.</p>
        <p>Sinais clínicos: Apatia, anorexia, narinas secas, pelos arrepiados, ranger de dentes, andar relutante, sonolência,
        isolamento, diminuição de movimento ruminal, salivação, agressividade, tremores, movimentos de pedalagem, dispnéia e arritimia,
        óbito de 12 a 48 horas após aparecimento dos sinais. </p> ` },

    {nomes: ["samambaia", "samambaia do campo", "samambaia das taperas", "pteridium aquilinum"],
        descricao: `<p>Tóxica! Tem efeito acumulativo.</p>
        <p>Princípio tóxico: Tiaminase do tipo I, que provoca inativação da tiamina e acúmulo do ácido pirúvico.</p>
        <p>Sinais clínicos: Variam conforme a forma de apresentação, sendo do tipo laríngeo, entérico e forma crônica.
        Em bovinos o principal sinal é a hematúria enzoótica.</p>`  },

    {nomes: ["cavalinha", "equisetum"],
        descricao: `<p>Tóxica!</p>
        <p>Princípios tóxicos: Articulina, sílica, ácido palmítico e aconítico e alcalóide palustrina.</p>
        <p>Sinais clínicos: Perda de peso, sintomas nervosos, queda na produção e perda de controle muscular.</p>`},

    {nomes: ["dimorphandra", "faveira", "falso barbatimao", "cinzeiro", "farinheiro", "fava danta", "enche garganta", "faveiro do campo",
        "farinha seca", "barbatimão de folha miuda" ],
        descricao:`<p>Tóxica!</p>
        <p>Princípio tóxico: Rutina e alcalóides.</p>
        <p>Sinais clínicos: Pelos arrepiados, perda de apetite, animal defeca e urina pouco, timpanismo, tremores, edema, óbito em 72 horas
        em casos agudos.</p>`},

    {nomes: ["ricinus communis", "mamona", "carrapateira", "palma de cristo", "regateira", "ricino"],
        descricao:`<p>Tóxica!</p>
       <p>Princípio tóxico: Ricinina, toxalbumina ricina.</p>
        <p>Sinais clínicos: Distúrbios neuromusculares e gastroentéricos.</p>`},

    {nomes: ["senna ocidentallis", "fedegoso"],
        descricao:`<p>Tóxica!</p>
        <p>Princípio tóxico: Substâncias catárticas, N-metilmorfoline e oximetilantraquinona.</p>
        <p>Sinais clínicos:Podem demorar até duas semanas após a ingestão para aparecerem, sendo diarreia, fraqueza muscular, ataxia
        e decúbito esternal ou lateral.</p>`},

    {nomes: ["lantana", "chumbinho", "camará", "cambara", "margaridinha"],
        descricao:`<p>Tóxica! Planta fotossensibilizante.</p>
        <p>Princípio tóxico: Triterpenos Lantadene A e Lantadene B.</p>
        <p>Sinais clínicos: Pode ter curso agudo, subagudo ou crônico, gerando apatia, anorexia, problemas gastrointestinais, edema, 
        fotosensibilização e morte.</p>`},    

    {nomes: ["stryphnodendron", "barbatimao"],
        descricao:`<p>Tóxica! Planta fotossensibilizante.</p>
        <p>Princípio tóxico: Saponinas e taninos.</p>
        <p>Sinais clínicos: Apatia, anorexia, emagrecimento, tremores, desidratação, erosõeos nas mucosas, sonolência e lesões de pele.</p>`}, 

    {nomes: ["enterolobium", "orelha de macaco", "timbauba", "tamboril da mata", "tamboril do campo", "orelha de onça", "vinhatico do campo"],
        descricao:`<p>Tóxica! Planta fotossensibilizante.</p>
        <p>Princípio tóxico: Saponinas gitogenina e digitogenina.</p>
        <p>Sinais clínicos: Pode ter curso agudo ou crônico, gera sinais gastrointestinais, lesões de pele e corrimento nasal.</p>`}, 

    {nomes: ["sorgo", "sorgo de alepo", "sorgo sudao", "capim sudão", "trevo branco", "passegueiro bravo", "mandioca"],
        descricao:`<p>Tóxica! Planta cianogênica.</p>
        <p>Princípio tóxico: Glicosídeo cianogênico.</p>
        <p>Sinais clínicos: Dispnéia, tremores musculares, excitação, salivação, lacrimejamento, incoordenação motora, opistótono,
        decúbito, convulsões e dilatação das pupilas.</p>`}, 

    {nomes:["dracena"],
        descricao: `<p>Tóxica!</p>
        <p>Pode causar irritação, vômito e diarreia.</p>`  },

    {nomes:["tulipa"],
        descricao: `<p>Tóxica!</p>
        <p>Pode causar vômito e diarreia, além de alterações respiratórias.</p>`  },

    {nomes:["hortensia", "violeta"],
        descricao: `<p>Tóxica!</p>
        <p>Costuma causar alterações gastrointestinais se ingerida, como gastrite, vômito e diarreia.</p>`  },
    ]

// Função para verificar toxicidade da planta
function verificarToxicidade() {
    let nomePlanta = document.getElementById("nomePlanta").value.trim();
    
    if (nomePlanta === "") {
        document.getElementById("resultado").innerHTML = "⚠️ Por favor, digite o nome de uma planta.";
        document.getElementById("resultado").style.color = "red";
        return;
    }

    // Normaliza o nome digitado (remove acentos e transforma em minúsculas)
    let nomePlantaNormalizado = removerAcentos(nomePlanta.toLowerCase());

    // Percorre a lista para verificar se a planta está na lista de tóxicas
    let plantaEncontrada = plantasToxicas.find(planta => 
        planta.nomes.some(nome => nome === nomePlantaNormalizado)
    );

    if (plantaEncontrada) {
        document.getElementById("resultado").innerHTML = `⚠️ <strong>Atenção!</strong> ${plantaEncontrada.descricao}`;
        document.getElementById("resultado").style.color = "red";
    } else {
        document.getElementById("resultado").innerHTML = `✅ Aparentemente, "${nomePlanta}" não está na nossa lista de plantas tóxicas. Mas sempre consulte um veterinário para ter certeza!`;
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
