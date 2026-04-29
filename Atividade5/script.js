let idades = [18, 25, 30, 22, 40, 35, 28, 19];
let sexos = ["masculino", "feminino", "feminino", "outros", "masculino", "feminino", "masculino", "outros"];
let opinioes = [4, 3, 2, 1, 4, 3, 2, 1];

function adicionar(){
    let idade = Number(document.getElementById("idade").value);
    let sexo = document.getElementById("sexo").value;
    let opiniao = Number(document.getElementById("opiniao").value);

    idades.push(idade);
    sexos.push(sexo);
    opinioes.push(opiniao);

    alert("Adicionado!");
}

function calcular(){
    let total = idades.length;

    let soma = 0;
    for(let i = 0; i < total; i++){
        soma += idades[i];
    }
    let media = soma / total;

    let maior = Math.max(...idades);
    let menor = Math.min(...idades);

    let pessimo = opinioes.filter(o => o === 1).length;

    let otimoBom = opinioes.filter(o => o === 4 || o === 3).length;
    let porcentagem = (otimoBom / total) * 100;

    let masc = sexos.filter(s => s === "masculino").length;
    let fem = sexos.filter(s => s === "feminino").length;
    let outros = sexos.filter(s => s === "outros").length;

    document.getElementById("resultado").innerHTML =
        "Média idade: " + media.toFixed(2) + "<br>" +
        "Mais velho: " + maior + "<br>" +
        "Mais novo: " + menor + "<br>" +
        "Péssimo: " + pessimo + "<br>" +
        "Ótimo/Bom: " + porcentagem.toFixed(2) + "%<br>" +
        "Homens: " + masc + "<br>" +
        "Mulheres: " + fem + "<br>" +
        "Outros: " + outros;
}