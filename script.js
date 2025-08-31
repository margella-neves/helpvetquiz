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
    let plantaEncontrada = plantasToxi
