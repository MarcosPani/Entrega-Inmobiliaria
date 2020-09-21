const inmobiliarias = [
    {
        id:1,
        nombre:"Abate Propiedades",
        descripcion:"Somos una empresa pujante y dinámica dedicada a brindar servicios profesionales de alta calidad en negocios inmobiliarios. Procuramos la plena satisfacción de nuestros clientes, compradores y vendedores, inversores, empresas y particulares, atendiendo sus necesidades, actuando dentro de un marco de confianza, honestidad, respeto y seguridad. Apostamos a vínculos a largo plazo con nuestros clientes, procurando darle valor agregado a nuestro servicio, buscando soluciones creativas e inteligentes. Contamos con un equipo de profesionales altamente calificado, joven, ágil y eficiente. Valoramos la calidad humana de nuestro equipo, le brindamos un ambiente de trabajo estimulante con posibilidades de desarrollo, y capacitación permanente. Atendemos las nuevas tendencias, nos adaptamos a los cambios, somos una empresa innovadora y de vanguardia, mejorando en forma continua nuestros procesos.  Somos Abate Propiedades, ¡la excelencia es nuestro desafío!",
        contacto: {
            telefono: 27070700,
            direccion: "Guayaquí 3168 esq. Ellauri",
            correo: "info@abate.com.uy",
        },
        imagenes: {
            portada: 'https://cdn2.infocasas.com.uy/web/5d65431d5d3d4_infocdn__landing.png',
            perfil: 'imagenes/inmobis/abate.png'
        }
    },
    {
        id:2,
        nombre:"Caldeyro Victorica",
        descripcion:"Caldeyro Victorica Bienes Raíces es una firma especializada en la comercialización de propiedades urbanas y rurales premium. Trabaja contribuyendo a que Uruguay sea un destino para vivir, trabajar o invertir. Ofrece un servicio de primera clase, cumpliendo con los requerimientos de los clientes más exigentes. Sus oficinas en Carrasco reflejan el confort y sofisticación que caracteriza a la marca. Un servicio diferencial, con transparencia, discreción y profesionalismo, que hace de esta empresa única.",
        contacto: {
            telefono: 26008496,
            direccion: "Acapulco 1605 esq. Mantua",
            correo: "caldeyro@caldeyro.com",
        },
        imagenes: {
            portada: 'https://cdn2.infocasas.com.uy/web/5f187fe170e46_infocdn__caldeyro-portada-ic.jpg',
            perfil: 'imagenes/inmobis/Caldeyro Victroica.png'
        }
    },
    {
        id:3,
        nombre:"Carriquiry Propiedades",
        descripcion:"Somos una empresa con amplia experiencia en el sector inmobiliario de Punta del Este. Ofrecemos un asesoramiento personalizado, profesional y transparente tanto en ventas como en alquileres. Brindamos un servicio de calidad, acompañando y facilitando al cliente cada paso de su operación inmobiliaria. Contamos con un equipo formado por excelentes profesionales de trayectoria en el rubro para orientarlo en todos los aspectos de su operación logrando siempre la mejor experiencia. Además nuestros clientes pueden acceder a asesoramiento notarial, jurídico, contable, construcción, arquitectura y diseño de la mano de destacados estudios asociados de la región. Promocione su propiedad a través de nuestra moderna página web con las últimas tecnologías del sector, estamos asociados a los mejores portales y colegas de punta del este, logrando un rápido posicionamiento y difusión y venta de su propiedad. Consulte nuestros servicio de promoción y marketing inmobiliario, producción de fotos de calidad, home staging, publicidad en redes sociales, administracion de propiedades, tasaciones y más. Contacte hoy a uno de nuestros asociados para asesorarlo en cada paso de forma personalizada, interpretado inmediatamente sus necesidades para cerrar el mejor negocio! ",
        contacto: {
            telefono: 094191341,
            direccion: "Br. Artigas entre Pascual Gattas y Los Andes",
            correo: "info@carriquiry.com.uy",
        },
        imagenes: {
            portada: 'https://cdn2.infocasas.com.uy/web/5f0cc0a05da1d_infocdn__portada.jpg',
            perfil: 'imagenes/inmobis/Carriquiry.png'
        }
    },
    {
        id:4,
        nombre:"PISO 21 - REAL ESTATE",
        descripcion:"Conocer el mercado, y al público que lo habita, es un factor fundamental para que cada una de nuestras transacciones se acople de la mejor manera a las necesidades de los clientes.Piso21 tiene como mayor objetivo, por medio de una comunicación fluida y una sólida estructura interna, concretar de buena forma cada desafío que nace con el deseo de cada uno de nuestros clientes.Queremos que tu experiencia de compra, venta o alquiler, esté a la altura de tus expectativas, y es por esta razón que ponemos gran foco en los detalles, manteniendo la seriedad, el compromiso y la atención.Somos una empresa joven y dinámica. Buscamos el buen trato profesional avanzando a la par de los cambios que vivimos para brindarle al cliente la mejor atención.",
        contacto: {
            telefono: 099288096,
            direccion: "Ellauri 1320 bis",
            correo: "info@piso21.uy",
        },
        imagenes: {
            portada: 'https://cdn2.infocasas.com.uy/web/5f3d951fb3ac4_infocdn__header-piso.jpg',
            perfil: 'imagenes/inmobis/Piso 21.png'
        }
    },
    {
        id:5,
        nombre:"PROP",
        descripcion:"Somos una inmobiliaria pionera en Uruguay en el uso de plataformas digitales para la comercialización de propiedades. Fuimos reconocidos por InfoCasas como la mejor inmobiliaria en el uso de nuevas tecnologías en Uruguay. Contamos con una cartera de más de 250 emprendimientos inmobiliarios y cientos de apartamentos y casas en alquiler y venta. Nuestro equipo de asesores se capacita permanentemente para dar un servicio de excelencia. Si querés comprar, vender, invertir o alquilar, ¡no dudes en contactarnos!",
        contacto: {
            telefono: 26283254,
            direccion: "Juan Paullier 1064",
            correo: "administracion@prop.com.uy",
        },
        imagenes: {
            portada: 'https://cdn2.infocasas.com.uy/web/5eab32f3e9d24_infocdn__prop-arriba.jpg',
            perfil: 'imagenes/inmobis/PROP.png'
        }
    },
    {
        id:6,
        nombre:"Punta Ballena Inmobiliaria",
        descripcion:"Punta Ballena Inmobiliaria la más moderna, eficaz y con tradición en la zona. Creciendo desde 1974, afianzando experiencia y convirtiéndonos en hito de la historia inmobiliaria de este lugar. Nosotros los socios, Selva Ferreres, Betina Ferreres, Nica Bazzano con el grupo de colaboradores, brindamos un servicio integral y personalizado en ventas, alquileres y administración de propiedades. Expertos en Punta Ballena y alrededores: Punta del Este | Las Grutas | Lomo de la Ballena | Solanas | Tio Tom | Chihuahua | Laguna del Sauce | Ocean Park | Sauce del Portezuelo | Zona Oeste | Santa Hilda | Club del Lago | Campos y Chacras. Formamos parte de este paraje maravilloso en su diversidad natural y humana, de playas y atardeceres de bosques, campos ondulados y lagunas. Compartimos la fama de la costa uruguaya con Punta del Este, próximos al aeropuerto y al mundo.",
        contacto: {
            telefono: 094972631,
            direccion: "Ruta Interbalnearia km 118, Punta Ballena, Uruguay",
            correo: "ventas@puntaballenainmobiliaria.com",
        },
        imagenes: {
            portada: 'https://cdn2.infocasas.com.uy/web/5e4e85cc8aabd_infocdn__imagen-1-copia.jpg',
            perfil: 'imagenes/inmobis/Punta Ballena.png'
        }
    }
]

function cargarDetalles(){
    const parametrosDeUrl = new URLSearchParams(location.search)
    let id = parametrosDeUrl.get('id')

    inmAMostrar = inmobiliarias.find(function (inmobiliaria) {
        return inmobiliaria.id == id
})

document.querySelector('.portada').style = 'background-image: url('+inmobiliarias[id-1].imagenes.portada+')'
document.querySelector('#nombre').innerText = "Acerca de " + inmobiliarias[id-1].nombre
document.querySelector('.descripcion').innerText = inmobiliarias[id-1].descripcion
document.querySelector('.perfil').src = inmobiliarias[id-1].imagenes.perfil
document.querySelector('#telefono').innerText = inmobiliarias[id-1].contacto.telefono
document.querySelector('#direccion').innerText = inmobiliarias[id-1].contacto.direccion
document.querySelector('#correo').innerText = inmobiliarias[id-1].contacto.correo
}
