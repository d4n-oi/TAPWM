function RetornaMaior(){
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const num3 = Number(document.getElementById("num3").value);

    const maior = Math.max(num1, num2, num3);

    document.getElementById("maior").innerHTML = maior;
}

function OrdenaCrescente(){
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const num3 = Number(document.getElementById("num3").value);

    let numeros = [num1, num2, num3];

    numeros.sort(function(a, b){
        return a - b;
    });

    document.getElementById("crescente").innerHTML = numeros.join(", ");
}

function Palindromo(){
    let frase = document.getElementById("frase").value;

    let limpa = frase.toLowerCase().replace(/\s/g, "");
    let invertida = limpa.split("").reverse().join("");

    if(limpa === invertida){
        document.getElementById("palindromo").innerHTML = "É palíndromo";
    } else {
        document.getElementById("palindromo").innerHTML = "Não é palíndromo";
    }
}

function Subconjunto(){
    let palavra1 = document.getElementById("palav1").value;
    let palavra2 = document.getElementById("palav2").value;

    if(palavra1.includes(palavra2)){
        document.getElementById("subconjunto").innerHTML = "É subconjunto";
    } else {
        document.getElementById("subconjunto").innerHTML = "Não é subconjunto";
    }
}

function DiaSemana(){
    let data = document.getElementById("data").value;

    let dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

    let dia = new Date(data).getDay();

    document.getElementById("diasemana").innerHTML = dias[dia];
}