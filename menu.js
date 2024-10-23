const openBtn = document.getElementById("open-button")
const closeBtn = document.getElementById("close-button")
const menu = document.getElementById("menu")
const overlay = document.getElementById("overlay")


openBtn.addEventListener('click', ()=> {
    menu.classList.add('show-menu')
    overlay.classList.add('menu-overlay')
})

closeBtn.addEventListener('click', (e)=> {
    e.stopPropagation()
    menu.classList.remove('show-menu')
    overlay.classList.remove('menu-overlay')
    console.log('me tocaron')
})





// behavior menu subitems mobile
const menuItems = document.querySelectorAll('.header-navigation-list-item-wrapper')

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const allSubmenus = document.querySelectorAll('.header-submenu')
        allSubmenus.classList.toggle('header-submenu-show')
    })
    
})


document.querySelectorAll('.header-navigation-item').forEach(item => {
    let wasClicked = false;
    let clickTimeout;
  
    item.addEventListener('click', (e) => {

      if (window.innerWidth >= 1024) return;
  
      if (!wasClicked) {
        e.preventDefault(); 
        wasClicked = true;

        clickTimeout = setTimeout(() => {
          wasClicked = false;
        }, 1000);
      } else {
        clearTimeout(clickTimeout);
        wasClicked = false;
      }
    });
  });


// Primero verificamos si estamos en desktop
function isDesktop() {
    return window.innerWidth >= 1024; // Asumimos que 1024px o más es desktop
  }
  
  // Creamos una copia del header-main solo si estamos en desktop
  const headerMain = document.querySelector('.header-main');
  
  if (isDesktop()) {
    const stickyHeader = headerMain.cloneNode(true);
    stickyHeader.classList.add('sticky-header');
    
    // Cambiamos el src del logo en el sticky header al logo blanco
    const stickyLogo = stickyHeader.querySelector('.header-logo');
    stickyLogo.src = 'assets/logos/brand/fymelco-logo-white.svg';
    
    document.body.appendChild(stickyHeader);
    
    // Función para manejar el scroll
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const triggerPosition = headerMain.offsetTop + headerMain.offsetHeight;
      
      if (scrollPosition > triggerPosition) {
        stickyHeader.classList.add('visible');
      } else {
        stickyHeader.classList.remove('visible');
      }
    }
    
    // Agregamos el listener para el scroll
    window.addEventListener('scroll', handleScroll);
  }
  
  // Escuchamos los cambios de tamaño de la ventana para actualizar si estamos en desktop o no
  window.addEventListener('resize', function() {
    if (!isDesktop() && document.querySelector('.sticky-header')) {
      const stickyHeader = document.querySelector('.sticky-header');
      stickyHeader.remove();
    }
  });