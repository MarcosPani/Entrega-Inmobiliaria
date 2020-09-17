const correo = document.getElementById("correo")
const contraseña = document.getElementById("password")
const form = document.getElementById("form")

const errorCorreo = document.querySelector('.error-correo')
errorCorreo.style.display ='none'
const errorPass = document.querySelector('.error-pass')
errorPass.style.display ='none'


form.addEventListener("submit", e=>{

    e.preventDefault()
    let validacionEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
   if (correo.value.match(validacionEmail) && contraseña.value.length >= 8){
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
    }
})

