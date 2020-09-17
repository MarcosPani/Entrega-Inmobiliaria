function pruebaParametrosURL() {
    const parametrosURL = new URLSearchParams(location.search)
    if (parametrosURL.get('dormitorios')==3){
        alert("Casas con 3 dormitorios")
    }
}







//let leerURL = location.search.substring(1,location.search.length)
    //let arrayParametros = leerURL.split("&")

    //var arrayParametrosValores = {}
    //for (i=0; i<arrayParametros.length; i++) {   
    //    arrayParametrosValores = arrayParametros[i].split("=")
    //}
    //console.log(arrayParametrosValores)