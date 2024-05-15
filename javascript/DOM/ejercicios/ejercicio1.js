function compararCadenas(cadena1, cadena2){
    if (cadena1 === cadena2){
        return true;
    } else {
        return false;
    }
}

function mostrarResultado() {
    let cadena1 = document.getElementById('cadena1').value;
    let cadena2 = document.getElementById('cadena2').value;
    let resultado = compararCadenas(cadena1, cadena2);
    document.getElementById('resultado').innerText = resultado ? "Las cadenas son iguales." : "Las cadenas no son iguales.";
}