function search() {
    // TODO: Obtener los terminos de busqueda del input de texto
    // TODO: Redireccion a la pagina de listado con el filtro ya aplicados
    location.href="inmuebles.html";
}




function getDataFromAPI(filtros) {
    // TODO: Obtener datos del servidor
    // De momento vamos a retornar datos "quemados", luego deben venir del servidor
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
            departamento: 'Montevideo',
            ubicacion: {
                barrio: 'Reducto',
                codigoPostal: '',
                direccion: 'Guaycuru 2799'
            },
            referencia: '',
            añoConstruccion: 1977,
            amenities: {
                garaje: true,
                jardin: false,
                calefaccion: false,
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
            departamento: 'Montevideo',
            ubicacion: {
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
            departamento: 'Montevideo',
            ubicacion: {
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

    // Esto realmente lo hace el API
    const propiedadesFiltradas = propiedades.filter(
        function (propiedad) {
            // Tipo de propiedad
            let mostrarCasas
            let mostrarApartamentos

            if (filtros.tipoDePropiedad.casa && filtros.tipoDePropiedad.apartamento) {
                mostrarCasas = true
                mostrarApartamentos = true
            } else {
                mostrarCasas = filtros.tipoDePropiedad.casa ? propiedad.tipoDePropiedad === 'Casa' : true
                mostrarApartamentos = filtros.tipoDePropiedad.apartamento ? propiedad.tipoDePropiedad === 'Apartamento' : true
            }

            // Operacion
            const laOperacionCoincide = propiedad.operacion === filtros.tipoDeOperacion
            
            //Ubicacion
            const enMontevideo = filtros.departamento.montevideo ? propiedad.departamento === 'Montevideo' : true
            const enCanelones = filtros.departamento.canelones ? propiedad.departamento === 'Canelones' : true
            const enMaldonado = filtros.departamento.maldonado ? propiedad.departamento === 'Maldonado' : true

            // Amenities
            const conGaraje = filtros.amenities.garaje ? propiedad.amenities.garaje : true
            const tieneSeguridad = filtros.amenities.seguridad ? propiedad.amenities.seguridad : true
            const tieneJardin = filtros.amenities.jardin ? propiedad.amenities.jardin : true
            const conPiscina = filtros.amenities.piscina ? propiedad.amenities.piscina : true
            const conAmueblado = filtros.amenities.amueblado ? propiedad.amenities.amueblado : true

            //Dormitorios
            const conUnDormitorio = filtros.dorimitorios.unDorimitorio ? propiedad.habitaciones.dormitorios == 1 : true
            const conDosDormitorio = filtros.dorimitorios.dosDorimitorio ? propiedad.habitaciones.dormitorios == 2 : true
            const conTresDormitorio = filtros.dorimitorios.tresDorimitorio ? propiedad.habitaciones.dormitorios == 3 : true
            const conCuatroDormitorio = filtros.dorimitorios.cuatroDorimitorio ? propiedad.habitaciones.dormitorios >= 4 : true

            //Baños
            const conUnBaño = filtros.baños.unBaño ? propiedad.habitaciones.banos == 1 : true     
            const conDosBaño = filtros.baños.dosBaño ? propiedad.habitaciones.banos == 2 : true 
            const conTresBaño = filtros.baños.tresBaño ? propiedad.habitaciones.banos >= 3 : true     

            //Rango Precios
            let precioMin = document.querySelector('#precioMin')
            let precioMax = document.querySelector('#precioMax')
            let rangoPrecio
            
            if (precioMax.value.length == 0) {
                rangoPrecio = true
            }else {
                rangoPrecio = propiedad.precio.monto >= precioMin.value && propiedad.precio.monto <= precioMax.value
            }
            
            //Estado
            let mostrarUsados
            let mostrarEnConstruccion
            let mostrarAEstrenar
        
            if (filtros.estado.enConstruccion && filtros.estado.usado && filtros.estado.aEstrenar){
                mostrarUsados = true
                mostrarEnConstruccion = true
                mostrarAEstrenar = true
            } else {
                mostrarUsados = filtros.estado.usado ? propiedad.estado === 'Usado' : true,
                mostrarEnConstruccion = filtros.estado.enConstruccion ? propiedad.estado === 'En Construccion' : true,
                mostrarAEstrenar = filtros.estado.aEstrenar ? propiedad.estado === 'A estrenar' : true
            }


            // Resultado del filtro
            return laOperacionCoincide && mostrarCasas && mostrarApartamentos && conGaraje && tieneSeguridad && tieneJardin && conUnBaño && conDosBaño && conTresBaño && conUnDormitorio && conDosDormitorio && conTresDormitorio && conCuatroDormitorio && conPiscina 
            && conAmueblado && mostrarUsados && mostrarEnConstruccion && mostrarAEstrenar && rangoPrecio && enMontevideo && enCanelones && enMaldonado
        }
    )

    return propiedadesFiltradas

}

function applyFilter() {
    // Obtenemos el elemento que representa el contenedor
    const container = document.querySelector('.items-container')

    // Obtenemos el elemento a ser utilizado como plantilla de card
    const itemTemplate = document.getElementById('item-template')

    // Obtenemos el elemento a ser utilizado como plantilla de imagen para carousel
    const carouselImageTemplate = document.getElementById('item-template-carousel-image')

    // Obtenemos los valores de los filtros
    const filtros = {
        tipoDeOperacion: document.querySelector('input[name="tipoDeOperacion"]:checked').value,
        tipoDePropiedad: {
            casa: document.querySelector('#tipoDePropiedadCasa').checked,
            apartamento: document.querySelector('#tipoDePropiedadApartamento').checked,
        },
        dorimitorios: {
            unDorimitorio: document.querySelector('#dormitorio1').checked,
            dosDorimitorio: document.querySelector('#dormitorio2').checked,
            tresDorimitorio: document.querySelector('#dormitorio3').checked,
            cuatroDorimitorio: document.querySelector('#dormitorio4').checked
        },
        baños: {
            unBaño: document.querySelector('#baño1').checked,
            dosBaño: document.querySelector('#baño2').checked,
            tresBaño: document.querySelector('#baño3').checked,
        }, 
        estado: {
            enConstruccion: document.querySelector('#estadoEnConstruccion').checked,
            aEstrenar: document.querySelector('#estadoAEstrenar').checked,
            usado: document.querySelector('#estadoUsado').checked,
        },
        amenities: {
            garaje: document.querySelector('#amenityGaraje').checked,
            jardin: document.querySelector('#amenityJardin').checked,
            seguridad: document.querySelector('#amenitySeguridad').checked,
            piscina: document.querySelector('#amenityPiscina').checked,
            amueblado: document.querySelector('#amenityAmueblado').checked
        },
        departamento: {
            montevideo: document.querySelector('#ubicacionMO').checked,
            canelones: document.querySelector('#ubicacionCA').checked,
            maldonado: document.querySelector('#ubicacionMA').checked
        },
    }

    // Obtenemos la lista de propiedades a mostrar
    const propiedades = getDataFromAPI(filtros)

    // Debemos limpiar el contenedor para poder agregarle los nuevos resultados
    container.innerHTML = ''

    // Si dado el filtro, tenemos propiedades...
    if (propiedades.length > 0) {
        // Por cada una de las propiedades
        for (let indiceDePropiedad = 0; indiceDePropiedad < propiedades.length; indiceDePropiedad++) {
            // Clonamos el template para agregarlo al contenedor de cards
            const itemClone = itemTemplate.content.cloneNode(true)

            // Obtenemos el contenedor de imagenes del carousel
            const carouselImagesContainer = itemClone.querySelector('.carousel-inner')

            // Seteamos el titulo
            itemClone.querySelector('.item-title').innerText = propiedades[indiceDePropiedad].tipoDePropiedad + ' en ' + 
                propiedades[indiceDePropiedad].operacion + ' en '+
                propiedades[indiceDePropiedad].ubicacion.barrio + ', ' +
                propiedades[indiceDePropiedad].habitaciones.dormitorios + (propiedades[indiceDePropiedad].habitaciones.banos > 0 ? (propiedades[indiceDePropiedad].habitaciones.dormitorios > 1 ? ' dormitorios y ' : ' dormitorio y ') +
                propiedades[indiceDePropiedad].habitaciones.banos + (propiedades[indiceDePropiedad].habitaciones.banos > 1 ? ' baños' : ' baño') : (propiedades[indiceDePropiedad].habitaciones.dormitorios > 1 ? ' dormitorios' : ' dormitorio'))

            itemClone.querySelector('.item-title').id = propiedades[indiceDePropiedad].id
            itemClone.querySelector('.item-title').href = "inmueble.html?id="+propiedades[indiceDePropiedad].id

            // Seteamos el precio
            itemClone.querySelector('.item-price').innerText = propiedades[indiceDePropiedad].precio.monto + ' ' + propiedades[indiceDePropiedad].precio.divisa

            // Seteo el id para el carousel y los botones de accion (atras, adelante)
            const carouselId = 'carousel-' + indiceDePropiedad
            itemClone.querySelector('.carousel').id = carouselId
            itemClone.querySelector('.carousel-control-prev').href = '#' + carouselId
            itemClone.querySelector('.carousel-control-next').href = '#' + carouselId

            // Por cada una de las imagenes de la propiedad
            for (let indiceDeImagen = 0; indiceDeImagen < propiedades[indiceDePropiedad].imagenes.length; indiceDeImagen++) {
                // Clonamos el template para agregarlo al contenedor del carousel
                const carouselImageClone = carouselImageTemplate.content.cloneNode(true)

                // Si es la primera imagen de la lista...
                if (indiceDeImagen === 0) {
                    // La seteo como activa en el carousel
                    carouselImageClone.querySelector('.carousel-item').classList.add('active')
                }

                // Seteamos la URL de la imagen
                carouselImageClone.querySelector('img').src = propiedades[indiceDePropiedad].imagenes[indiceDeImagen]

                // Agregamos el elemento clonado como hijo del carousel
                carouselImagesContainer.appendChild(carouselImageClone)
            }

            // Agregamos el elemento clonado como hijo del contenedor de cards
            container.appendChild(itemClone)
        }
    } else {
        // TODO: Mostrar mensaje de ayuda al usuario
    }
}

//Filtros Mobile

function filtrosMobile(){
    const mostrarFiltros = document.querySelector('.filters')
    mostrarFiltros.classList.toggle('opened')
}