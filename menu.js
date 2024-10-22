const toggleBtn = document.getElementById("toggle-button")
const menu = document.getElementById("menu")

toggleBtn.addEventListener('click', ()=> {
    menu.classList.toggle('show-menu')
})

// behavior menu subitems mobile

const menuItems = document.querySelectorAll('.header-navigation-list-item-wrapper')

menuItems.forEach(item => {
    const allSubmenus = document.querySelectorAll('.header-submenu')
    allSubmenus.classList.toggle('header-submenu-show')
})