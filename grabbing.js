const thumbnailsList = document.querySelector('.product-thumbnails-list');
let isDragging = false;
let startX;
let scrollLeft;

thumbnailsList.addEventListener('mousedown', (e) => {
  isDragging = true;
  thumbnailsList.classList.add('grabbing');
  startX = e.pageX - thumbnailsList.offsetLeft;
  scrollLeft = thumbnailsList.scrollLeft;
});

thumbnailsList.addEventListener('mouseleave', () => {
  isDragging = false;
  thumbnailsList.classList.remove('grabbing');
});

thumbnailsList.addEventListener('mouseup', () => {
  isDragging = false;
  thumbnailsList.classList.remove('grabbing');
});

thumbnailsList.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - thumbnailsList.offsetLeft;
  const walk = (x - startX) * 2; // Velocidad del drag
  thumbnailsList.scrollLeft = scrollLeft - walk;

  // Si llegamos al final, volvemos al principio
  if (thumbnailsList.scrollLeft === 0) {
    thumbnailsList.scrollLeft = thumbnailsList.scrollWidth;
  } else if (thumbnailsList.scrollLeft >= thumbnailsList.scrollWidth - thumbnailsList.clientWidth) {
    thumbnailsList.scrollLeft = 0;
  }
});

// Para soportar drag en dispositivos táctiles
thumbnailsList.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].pageX - thumbnailsList.offsetLeft;
  scrollLeft = thumbnailsList.scrollLeft;
});

thumbnailsList.addEventListener('touchend', () => {
  isDragging = false;
});

thumbnailsList.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const x = e.touches[0].pageX - thumbnailsList.offsetLeft;
  const walk = (x - startX) * 2; // Velocidad del drag
  thumbnailsList.scrollLeft = scrollLeft - walk;

  // Comportamiento infinito
  if (thumbnailsList.scrollLeft === 0) {
    thumbnailsList.scrollLeft = thumbnailsList.scrollWidth;
  } else if (thumbnailsList.scrollLeft >= thumbnailsList.scrollWidth - thumbnailsList.clientWidth) {
    thumbnailsList.scrollLeft = 0;
  }
});