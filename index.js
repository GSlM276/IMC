function Calcular() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("Altura").value);
    let res = document.getElementById('res');
    

    
    if (isNaN(peso) || isNaN(altura) || altura < 0.5 || altura > 2.5 || peso < 10 || peso > 300) {
        res.innerHTML = "Por favor, insira valores válidos!";
        return;
    }
    
    let imc = peso / (altura * altura);
    imc = imc.toFixed(2); 

   
    if (imc < 18.5) {
        res.innerHTML = `Seu IMC é ${imc}. Você está abaixo do peso.`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        res.innerHTML = `Seu IMC é ${imc}. Peso normal.`;
    } else if (imc >= 25 && imc <= 29.9) {
        res.innerHTML = `Seu IMC é ${imc}. Você está com sobrepeso.`;
    } else if (imc >= 30 && imc <= 34.9) {
        res.innerHTML = `Seu IMC é ${imc}. Obesidade grau 1.`;
    } else if (imc >= 35 && imc <= 39.9) {
        res.innerHTML = `Seu IMC é ${imc}. Obesidade grau 2.`;
    } else {
        res.innerHTML = `Seu IMC é ${imc}. Obesidade grau 3 (mórbida).`;
    }
}
