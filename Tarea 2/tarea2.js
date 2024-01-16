const $botonIngresar = document.querySelector("#boton-ingreso");

let footer = document.createElement("footer");
footer.setAttribute ("footer", "myfooter");
document.body.appendChild(footer);


$botonIngresar.onclick = function () {
    cambiarTextoTitulo();
    mostrarInformacionUsuario();
    return false
}

function cambiarTextoTitulo() {
    const primerNombreUsuario = document.querySelector("#primer-nombre-usuario").value;

    let textoTitulo = document.querySelector("h1");
    textoTitulo.innerText = "Bienvenido " + primerNombreUsuario + "!";
}

function mostrarInformacionUsuario() {
    const primerNombreUsuario = document.querySelector("#primer-nombre-usuario").value;
    const segundoNombreUsuario = document.querySelector("#segundo-nombre-usuario").value;
    const apellidoUsuario = document.querySelector("#apellidos-usuario").value;
    const edadUsuario = Number(document.querySelector("#edad-usuario").value);

    let nodoInformacion = document.createElement("p");
    let informacionUsuario = document.createTextNode(`${primerNombreUsuario} ${segundoNombreUsuario} ${apellidoUsuario} edad ${edadUsuario}`);

    nodoInformacion.appendChild(informacionUsuario);
    footer.appendChild(nodoInformacion);
}
