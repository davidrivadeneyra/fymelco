const textslide = document.querySelectorAll('.topbar-slide .topbar-text');
let currentIndex = 0;

function showNextSlide() {
    textslide[currentIndex].classList.remove('active');
    textslide[currentIndex].classList.add('exit');
    
    currentIndex = (currentIndex + 1) % textslide.length;

    setTimeout(() => {
        textslide.forEach(slide => slide.classList.remove('exit')); 
        textslide[currentIndex].classList.add('active');
    }, 500); 
}

setInterval(showNextSlide, 3000);