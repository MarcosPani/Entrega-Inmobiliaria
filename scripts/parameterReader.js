function readUrlParameters() {
    const parametrosDeUrl = new URLSearchParams(location.search)

    if (parametrosDeUrl.get('tipoDeOperacion') === 'Alquiler') {
        document.querySelector("#tipoDeOperacionAlquiler").checked = true
    } else if (parametrosDeUrl.get('tipoDeOperacion') === 'AlquilerTemporal') {
        document.querySelector("#tipoDeOperacionAlquilerTemporal").checked = true
    } else {
        document.querySelector("#tipoDeOperacionVenta").checked = true
    }

    if (parametrosDeUrl.get('ubicacion') == 'MO'){
        document.querySelector("#ubicacionMO").checked = true
    }else if (parametrosDeUrl.get('ubicacion') == 'CA'){
        document.querySelector('#ubicacionCA').checked = true
    }else if (parametrosDeUrl.get('ubicacion') == 'MA'){
        document.querySelector('#ubicacionMA').checked = true
    }else{} 
}
