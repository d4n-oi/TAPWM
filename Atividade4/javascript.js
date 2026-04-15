let vencidas = 0;
let perdidas = 0;
let empate = 0;

function escolhaComputador() {
    const opcoes = ["pedra", "papel", "tesoura"];
    const index = Math.floor(Math.random() * 3);
    return opcoes[index];
}

function jogar(escolhaJogador) {
    const comp = escolhaComputador();
    let resultado = "";

    if (escolhaJogador === comp) {
        resultado = "Empate!";
        empate++;
    } else if (
        (escolhaJogador === "pedra" && comp === "tesoura") ||
        (escolhaJogador === "papel" && comp === "pedra") ||
        (escolhaJogador === "tesoura" && comp === "papel")
    ) {
        resultado = "Você venceu!";
        vencidas++;
    } else {
        resultado = "Computador venceu!";
        perdidas++;
    }

    document.getElementById("resultado").innerText =
        "Você: " + escolhaJogador + " | Computador: " + comp + "\n" + resultado;
    document.getElementById("pontuacao").innerText =
        "Você ganhou: " +
        vencidas +
        " pontos" +
        "\n" +
        "Você perdeu: " +
        perdidas +
        " pontos" +
        "\n" +
        "Empates: " +
        empate +
        " pontos";
}
