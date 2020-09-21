// Funcion que muestra u oculta el menu mobile
function toggleMobileMenu() {
    // Obtengo el elemento HTML correpondiente a las acciones del menu
    const mobileMenuActions = document.querySelector('.mobile-menu-actions')

    // Hacemos toggle de la clase opened
    mobileMenuActions.classList.toggle('opened')
}