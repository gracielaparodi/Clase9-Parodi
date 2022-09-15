const indice = document.getElementById("Calcular");
indice.addEventListener("click", function () {
    calculateIMC();
});

let pesoInput = document.getElementById("peso");
let alturaInput = document.getElementById("altura");

peso.setAttribute("placeholder", "Su peso en kilogramos");
altura.setAttribute("placeholder", "Su altura en metros");

function calculateIMC() {
    let peso = pesoInput.value;
    let altura = alturaInput.value;
    let imc = Math.round(peso / (altura * altura));
    let mensaje = "";
    let desc = document.getElementById("desc");


    if (imc < 18.5) { alert("BAJO DE PESO | Su imc es " + imc); }
    else if (imc <= 18.50 || imc <= 24.99) { alert("NORMAL | Su imc es " + imc); }
    else if (imc <= 25.00 || imc <= 29.99) { alert("SOBREPESO | Su imc es " + imc); }
    else if (imc <= 30.00 || imc <= 34.99) { alert("OBESIDAD GRADO I  | Su imc es " + imc); }
    else if (imc <= 35.00 || imc <= 39.99) { alert("OBESIDAD GRADO II | Su imc es " + imc); }
    else if (imc < 40) { alert("OBESIDAD GRADO III | Su imc es " + imc); }
}
