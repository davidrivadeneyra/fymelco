let lastScroll = 0

window.addEventListener('scroll', ()=> {
    const currentScroll = window.scrollY
    const transparentHeader = document.getElementById('transparentHeader')
    const whiteHeader = document.getElementById('whiteHeader')

    if (currentScroll > lastScroll && currentScroll > 120) {

        transparentHeader.classList.add('header-hidden')
        whiteHeader.classList.remove('header-hidden') 

    }  else if (currentScroll < lastScroll) {
        transparentHeader.classList.remove('header-hidden')
        whiteHeader.classList.add('header-hidden')
    }

    lastScroll = currentScroll
})