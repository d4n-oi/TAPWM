function Operacoes(){
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const num3 = Number(document.getElementById("num3").value);

    const numeros = [num1, num2, num3]

    const soma = numeros.reduce((a, b) => a + b, 0);
    document.getElementById("resultado1").innerHTML = soma.toString();

}

function Palavra(){
    const txt1 = document.getElementById("txt1").value;
    const txt2 = document.getElementById("txt2").value;
    const txt3 = document.getElementById("txt3").value;
    const txt4 = document.getElementById("txt4").value;
    const txt5 = document.getElementById("txt5").value;

    const letras = [txt1, txt2, txt3, txt4, txt5];
    const palavras = [];

    for(let i = 0; i < 10; i++){
        let palavra = "";

        for(let x = 0; x < 5; x++){
            let indice = Math.floor(Math.random() * 5);
            palavra += letras[indice];
        }

        if(!palavras.includes(palavra)){
            palavras.push(palavra);
        } else {
            i--;
        }
    }

    document.getElementById("resultado2").innerHTML = palavras.join("<br>");
}