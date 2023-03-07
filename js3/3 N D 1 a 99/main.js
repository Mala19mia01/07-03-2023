
                    function generarNumeros() {
                        var numeros = [];
                        while (numeros.length < 3) {
                            var numero = Math.floor(Math.random() * 99) + 1;
                            if (!numeros.includes(numero)) {
                                numeros.push(numero);
                            }
                        }
                        document.getElementById("numerosGenerados").innerHTML = numeros.join(", ");
                    }

