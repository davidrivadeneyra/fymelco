const slider = document.querySelector('.slider');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let currentIndex = 0;

next.addEventListener('click', () => {
  const maxIndex = slider.children.length - 4; // Ajustar para desktop
  if (window.innerWidth <= 768) {
    maxIndex = slider.children.length - 2; // Ajustar para mobile
  }

  if (currentIndex < maxIndex) {
    currentIndex++;
    slider.style.transform = `translateX(-${currentIndex * (slider.children[0].offsetWidth + 16)}px)`;
  }
});

prev.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    slider.style.transform = `translateX(-${currentIndex * (slider.children[0].offsetWidth + 16)}px)`;
  }
});
