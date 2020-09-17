const correo = document.getElementById("correo")
const contraseña = document.getElementById("contraseña")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const form = document.getElementById("form")


const errorCorreo = document.querySelector('.error-correo')
errorCorreo.style.display ='none'
const errorPass = document.querySelector('.error-pass')
errorPass.style.display ='none'
const errorNombre = document.querySelector('.error-nombre')
errorNombre.style.display ='none'
const errorApellido = document.querySelector('.error-apellido')
errorApellido.style.display ='none'


form.addEventListener("submit", e=>{

    e.preventDefault()
    let validacionEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
   if (correo.value.match(validacionEmail) && contraseña.value.length >= 8 && nombre.value.length > 0 && apellido.value.length > 0){
        location.href="index.html"
    }
    else {
        if (correo.value.match(validacionEmail)) {
            errorCorreo.style.display ='none'    
        }
        else errorCorreo.style.display ='block'

        if (contraseña.value.length >= 8) {  
            errorPass.style.display ='none'
        }
        else errorPass.style.display ='block'
        
        if (nombre.value.length > 0) {  
            errorNombre.style.display ='none'
        }
        else errorNombre.style.display ='block'
        
        if (apellido.value.length > 0) {  
            errorApellido.style.display ='none'
        }
        else errorApellido.style.display ='block'
    }
})