let segundosTotalDeVideo = 0;
let minutosTotalDeVideo = 0;
let horasTotaldeVideo = 0;


function sumarTotalHoras() {
    let $horasDeVideo = Number(document.querySelector("#horas-de-video").value);
    horasTotaldeVideo = horasTotaldeVideo + $horasDeVideo;
}

function sumarTotalMinutos() {
    const minutosEnUnaHora = 60;
    let $minutosDeVideo = Number(document.querySelector("#minutos-de-video").value);
    minutosTotalDeVideo = minutosTotalDeVideo + $minutosDeVideo;
    while (minutosTotalDeVideo >= minutosEnUnaHora) {
        minutosTotalDeVideo -= minutosEnUnaHora;
        horasTotaldeVideo++;
    }
}

function sumarTotalSegundos() {
    const segundosEnUnMinuto = 60;
    let $segundosDeVideo = Number(document.querySelector("#segundos-de-video").value);
    segundosTotalDeVideo = segundosTotalDeVideo + $segundosDeVideo;
    while (segundosTotalDeVideo >= segundosEnUnMinuto) {
        segundosTotalDeVideo -= segundosEnUnMinuto;
        minutosTotalDeVideo++;
    }
}

function escribirTiempoTotalVideo() {
    document.querySelector("#horas-totales-video").innerText = horasTotaldeVideo;
    document.querySelector("#minutos-totales-video").innerText = minutosTotalDeVideo;
    document.querySelector("#segundos-totales-video").innerText = segundosTotalDeVideo;
}


document.querySelector("#boton-sumar").onclick = function sumarTiempoVideo() {
    sumarTotalSegundos()
    sumarTotalMinutos()
    sumarTotalHoras()
    escribirTiempoTotalVideo()
    return false;
}









