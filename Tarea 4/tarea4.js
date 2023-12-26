const $listaNumeros = document.querySelectorAll("li");
const numeros = [];

for (let i = 0; i < $listaNumeros.length; i++) {
    numeros.push(parseInt($listaNumeros[i].textContent));
}


let promedio = 0;
function obtenerPromedio(numeros) {
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
        total = total + numeros[i];
    }
    promedio = total / numeros.length;
}


let numeroMasPequenio = numeros[0]
function obtenerNumeroMasPequenio(numeros) {

    for (let i = 0; i < numeros.length; i++) {
        if (numeroMasPequenio > numeros[i]) {
            numeroMasPequenio = numeros[i]
        }

    }
}

let numeroMasGrande = numeros[0];
function obtenerNumeroMasGrande(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeroMasGrande < numeros[i]) {
            numeroMasGrande = numeros[i]
        }
    }
}


let numeroMasFrequente = numeros[0];
function obtenerModa(numeros) {
    let maxcounter = 0;
    for (let i = 0; i < numeros.length; i++) {
        let counter = 0;
        for (let j = 0; j < numeros.length; j++) {
            if (numeros[i] === numeros[j]) {
                counter++
            }
        }
        if (counter > maxcounter) {
            maxcounter = counter;
            numeroMasFrequente = numeros[i];
        }
    } return numeroMasFrequente
}


function escribirResultados() {
    document.querySelector("#promedio").textContent = promedio;
    document.querySelector("#numero-mas-pequenio").textContent = numeroMasPequenio;
    document.querySelector("#numero-mas-grande").textContent = numeroMasGrande;
    document.querySelector("#moda").textContent = numeroMasFrequente;
}


function llamarFunciones() {
    obtenerPromedio(numeros)
    obtenerNumeroMasPequenio(numeros)
    obtenerNumeroMasGrande(numeros)
    obtenerModa(numeros)
    escribirResultados()
}

llamarFunciones();

