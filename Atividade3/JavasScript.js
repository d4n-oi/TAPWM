
function media(){
    nome = prompt("Seu nome por gentileza");
    nota1 = prompt("Sua primeira nota");
    nota2 = prompt("Sua segunda nota");
    nota3 = prompt("Sua terceira nota");

    media = (nota1 + nota2 + nota3) *3;

    alert(nome + " sua média é " + media);
    confirm("Está feliz com isso? Bom, de qualquer jeito essa é sua média ok?");
}

function calculos(){
    let num1 = prompt("Digite seu primeiro nùmero");
    let num2 = prompt("Digite seu segundo número");
    let soma = num1 + num2;

    alert("Agora olha isso!!!!");
    confirm("A soma éeeeee       " + soma + " aeeeee");
    confirm("A subtração de primeiro pelo segundo éeeeee       " + (num1-num2) + " aeeeee");
    confirm("O produto éeeeee       " + (num1*num2) + " aeeeee");
    confirm("A divisão do primeiro pelo segundo éeeeee      " + (num1/num2) + " aeeeee");
    confirm("O resto da divisão do primeiro pelo segundo éeeeee       " + (num1%num2) + " aeeeee");
}