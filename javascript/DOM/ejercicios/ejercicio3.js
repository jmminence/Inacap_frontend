/*
Definir una función que muestre información sobre una cadena de texto que se le pasa como
argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/


function determinarTipoCadena (cadena) {

    if (cadena === cadena.toUpperCase()){
        return "Solo Mayusculas";
    }
    else if (cadena === cadena.toLowerCase()){
        return "Solo Minusculas";
    }
    else  {
        return "Mezcla de Mayusculas y Minusculas";
    }

}

function determinarTipoDeCadena() {

    const texto = document.getElementById('texto').value;

    const resultado = determinarTipoCadena(texto);

    document.getElementById('resultado').innerText = resultado;

}
