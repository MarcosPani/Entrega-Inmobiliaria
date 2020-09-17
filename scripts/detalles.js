const propiedades = [
    {
        id: 1,
        operacion: 'Venta',
        tipoDePropiedad: 'Casa',
        estado: 'Usado',
        precio: {
            monto: 145000,
            divisa: 'USD'
        },
        metraje: {
            total: 120,
            edificado: 110
        },
        habitaciones: {
            dormitorios: 2,
            banos: 1,
            habitaciones: 4
        },
        descripcion: 'Casa en muy buen estado :)',
        imagenes: [
            'imagenes/inmuebles/inmueble-1-img-1.jpg',
            'imagenes/inmuebles/inmueble-1-img-2.jpg'
        ],
        ubicacion: {
            departamento: '',
            barrio: 'Reducto',
            codigoPostal: '',
            direccion: 'Guaycuru 2799'
        },
        referencia: '',
        añoConstruccion: 1977,
        amenities: {
            garaje: true,
            jardin: true,
            piscina: false,
            amueblado: true,
            seguridad: true
        }
    },
    {
        id: 2,
        operacion: 'Venta',
        tipoDePropiedad: 'Apartamento',
        estado: 'A estrenar',
        precio: {
            monto: 210000,
            divisa: 'USD'
        },
        metraje: {
            total: 80,
            edificado: 80
        },
        habitaciones: {
            dormitorios: 2,
            banos: 2,
            habitaciones: 4
        },
        descripcion: '',
        imagenes: [
            'imagenes/inmuebles/inmueble-2-img-1.jpg',
        ],
        ubicacion: {
            departamento: '',
            barrio: 'Malvin',
            codigoPostal: '',
            direccion: 'Quiebrayugos 4635'
        },
        referencia: '',
        añoConstruccion: 2020,
        amenities: {
            garaje: true,
            jardin: false,
            piscina: false,
            amueblado: false,
            seguridad: true,
        }
    },      
    {
        id: 3,
        operacion: 'Venta',
        tipoDePropiedad: 'Casa',
        estado: 'Usado',
        precio: {
            monto: 640000,
            divisa: 'USD'
        },
        metraje: {
            total: 353,
            edificado: 353
        },
        habitaciones: {
            dormitorios: 3,
            banos: 3,
            habitaciones: 7
        },
        descripcion: '',
        imagenes: [
            'imagenes/inmuebles/inmueble-3/36839_399_148.jpg.th810.jpg',
            'imagenes/inmuebles/inmueble-3/36839_399_240.jpg.th810.jpg',
            'imagenes/inmuebles/inmueble-3/36839_399_616.jpg.th810.jpg',
            'imagenes/inmuebles/inmueble-3/36839_399_859.jpg.th810.jpg',
            'imagenes/inmuebles/inmueble-3/36839_399_940.jpg.th810.jpg',
        ],
        ubicacion: {
            departamento: '',
            barrio: 'Prado',
            codigoPostal: '',
            direccion: 'Gral Hornos 4258'
        },
        referencia: '',
        añoConstruccion: 2009,
        amenities: {
            garaje: true,
            jardin: false,
            piscina: false,
            amueblado: true,
            seguridad: true,
        }
    }
]

function cargarDetalles(){
    const parametrosDeUrl = new URLSearchParams(location.search)
    let id = parametrosDeUrl.get('id')

    inmAMostrar = propiedades.find(function (propiedad) {
        return propiedad.id == id
})
//Especificaciones
document.querySelector('.inmueble-precio').innerText = 'U$S ' + propiedades[id-1].precio.monto
document.querySelector('.banner').innerText = propiedades[id-1].tipoDePropiedad + ' en ' + propiedades[id-1].operacion + ' en ' + propiedades[id-1].ubicacion.barrio + ', ' + propiedades[id-1].habitaciones.dormitorios + ' dormitorios y ' + propiedades[id-1].habitaciones.banos + ' baños'
document.querySelector('#tipoPropiedad').innerText = propiedades[id-1].tipoDePropiedad
document.querySelector('#zona').innerText = propiedades[id-1].ubicacion.barrio
document.querySelector('#direccion').innerText = propiedades[id-1].ubicacion.direccion
document.querySelector('#dormitorios').innerText = propiedades[id-1].habitaciones.dormitorios
document.querySelector('#baños').innerText = propiedades[id-1].habitaciones.banos
document.querySelector('#habitaciones').innerText = propiedades[id-1].habitaciones.habitaciones
if (propiedades[id-1].amenities.amueblado == false) {document.querySelector('#amueblado').innerText = 'No'}else if(propiedades[id-1].amenities.amueblado == true){document.querySelector('#amueblado').innerText = 'Si'}
document.querySelector('#m2Terreno').innerText = propiedades[id-1].metraje.total
document.querySelector('#m2Edificado').innerText = propiedades[id-1].metraje.edificado
document.querySelector('#añoConstruccion').innerText = propiedades[id-1].añoConstruccion
document.querySelector('.descripcion').innerText = propiedades[id-1].descripcion

//amenities
if (propiedades[id-1].amenities.amueblado == true) {document.querySelector('#amueblado2').style.display = 'block'}
if (propiedades[id-1].amenities.garaje == true) {document.querySelector('#garaje').style.display = 'block'} 
if (propiedades[id-1].amenities.jardin == true) {document.querySelector('#jardin').style.display = 'block'}
if (propiedades[id-1].amenities.piscina == true) {document.querySelector('#piscina').style.display = 'block'}
if (propiedades[id-1].amenities.seguridad == true) {document.querySelector('#seguridad').style.display = 'block'}

//Carousel
const carouselImageTemplate = document.getElementById('item-template-carousel-image')
const carouselImagesContainer = document.querySelector('.carousel-inner')
for (let indiceDeImagen = 0; indiceDeImagen < propiedades[id-1].imagenes.length; indiceDeImagen++) {
    const carouselImageClone = carouselImageTemplate.content.cloneNode(true)
    if (indiceDeImagen === 0) {
        carouselImageClone.querySelector('.carousel-item').classList.add('active')
    }
    carouselImageClone.querySelector('img').src = propiedades[id-1].imagenes[indiceDeImagen]
    carouselImagesContainer.appendChild(carouselImageClone)
}
}