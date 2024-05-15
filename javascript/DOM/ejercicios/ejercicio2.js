function par_impar(numero) {
    if (numero % 2 === 0) {
        return "El número es par.";
    } else {
        return "El número es impar.";
    }
}

function mostrarResultado() {
    let numero = document.getElementById('numeroInput').value;
    let resultado = mostrarResultado(numero);
    document.getElementById('resultado').innerText = resultado;
}