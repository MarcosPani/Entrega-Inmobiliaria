let validarInputNumeros = /^[0-9]+$/
let vlidarDepartamentos = /\w*Montevideo|Canelones|Maldonado|Artigas|Cerro Largo|Colonia|Durazno|Flores|Florida|Lavalleja|Paysandú|Río Negro|Rivera|Rocha|Salto|San José|Soriano|Tacuarembó|Treinta y Tres\w*/

const alertaoperacion = document.querySelector('.alerta-operacion')
alertaoperacion.style.display ='none'
const alertapropiedad = document.querySelector('.alerta-propiedad')
alertapropiedad.style.display ='none'
const alertaambientes = document.querySelector('.alerta-ambientes')
alertaambientes.style.display ='none'
const alertaestado = document.querySelector('.alerta-estado')
alertaestado.style.display ='none'
const alertaubicacion = document.querySelector('.alerta-ubicacion')
alertaubicacion.style.display ='none'
const alertaprecio = document.querySelector('.alerta-precio')
alertaprecio.style.display ='none'

function enviar() {
if (document.querySelector('input[name="tipoDeOperacion"]:checked') && document.querySelector('input[name="tipoPropiedad"]:checked') && document.getElementById("dormitorios").value.match(validarInputNumeros) && document.getElementById("baños").value.match(validarInputNumeros) && document.querySelector('input[name="estado"]:checked') && document.getElementById("departamento").value.match(vlidarDepartamentos) && document.getElementById("barrio").value !== 0 && document.getElementById("calle").value !== 0 && document.getElementById("numero").value.match(validarInputNumeros) && document.getElementById("precio").value.match(validarInputNumeros) ) {
    location.href="inmuebles.html" ;
}else { 
    if (document.querySelector('input[name="tipoDeOperacion"]:checked')) {
        alertaoperacion.style.display ='none'
    }else{alertaoperacion.style.display ='block' }
    if (document.querySelector('input[name="tipoPropiedad"]:checked')) {
        alertapropiedad.style.display ='none'
    }else{alertapropiedad.style.display ='block'}
    if (document.getElementById("dormitorios").value.match(validarInputNumeros) && document.getElementById("baños").value.match(validarInputNumeros)) {
        alertaambientes.style.display ='none'
    }else{alertaambientes.style.display ='block'}
    if (document.querySelector('input[name="estado"]:checked')) {
        alertaestado.style.display ='none'
    }else{alertaestado.style.display ='block'}
    if (document.getElementById("departamento").value.match(vlidarDepartamentos) && document.getElementById("barrio").value !== 0 && document.getElementById("calle").value !== 0 && document.getElementById("numero").value.match(validarInputNumeros)) {
        alertaubicacion.style.display ='none'
    }else{alertaubicacion.style.display ='block'}
    if (document.getElementById("precio").value.match(validarInputNumeros)) {
        alertaprecio.style.display ='none'
    }else{alertaprecio.style.display ='block'}
}
}