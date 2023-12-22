const $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function (){
    calcularSalarioMensual ()
    return false;
}

function calcularSalarioMensual(){
    let $salarioMensual = document.querySelector("#salario-mensual");
    const salarioAnual = Number(document.querySelector("#salario-anual-usuario").value);
    const mesesEnUnAnio = 12;
    $salarioMensual.value = salarioAnual/mesesEnUnAnio;
}





















