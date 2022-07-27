function insert(num) {
    var numero = document.getElementById('resultado').value;
    document.getElementById('resultado').value = numero + num;
}

function clean() {
    document.getElementById('resultado').value = "";
}

function calcular() {
    var resultado = document.getElementById('resultado').value;

    if (resultado) {
        document.getElementById('resultado').value = eval(resultado);
    }
    else {
        document.getElementById('resultado').value = "erro";
    }
}