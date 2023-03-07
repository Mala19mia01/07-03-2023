function compararEdades() {
    var edad1 = parseInt(document.getElementById("edad1").value);
    var edad2 = parseInt(document.getElementById("edad2").value);
    var edad3 = parseInt(document.getElementById("edad3").value);

    if (edad1 > edad2 && edad1 > edad3) {
        document.getElementById("mayorEdad").innerHTML = edad1;
    } else if (edad2 > edad1 && edad2 > edad3) {
        document.getElementById("mayorEdad").innerHTML = edad2;
    } else {
        document.getElementById("mayorEdad").innerHTML = edad3;
    }
}