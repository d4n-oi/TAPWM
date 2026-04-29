function verificarTriangulo() {
    const ladoa = Number(document.getElementById("lado1").value);
    const ladob = Number(document.getElementById("lado2").value);
    const ladoc = Number(document.getElementById("lado3").value);

    if ((ladoa + ladob) > ladoc && (ladoa + ladoc) > ladob && (ladob + ladoc) > ladoa) {
        if (ladoa === ladob && ladob === ladoc) {
            document.getElementById("resultado").innerHTML = "É um triângulo equilátero";
        } else if (ladoa === ladob || ladob === ladoc || ladoa === ladoc) {
            document.getElementById("resultado").innerHTML = "É um triângulo isósceles";
        } else {
            document.getElementById("resultado").innerHTML = "É um triângulo escaleno";
        }
    } else {
        document.getElementById("resultado").innerHTML = "Não é um triângulo";
    }
}