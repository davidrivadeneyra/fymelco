const productList = document.querySelector('.product-thumbnails-list');
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;
let startIndex = 0;

// Añadir eventos de mouse y touch
productList.addEventListener('mousedown', startDrag);
productList.addEventListener('touchstart', startDrag);

productList.addEventListener('mouseup', endDrag);
productList.addEventListener('touchend', endDrag);

productList.addEventListener('mousemove', drag);
productList.addEventListener('touchmove', drag);

// Empezar el drag
function startDrag(e) {
  isDragging = true;
  startPos = getPositionX(e);
  startIndex = currentTranslate;

  // Animación suave
  animationID = requestAnimationFrame(animation);
}

// Terminar el drag
function endDrag() {
  isDragging = false;
  cancelAnimationFrame(animationID);
  
  const movedBy = currentTranslate - prevTranslate;
  
  // Hacer el loop infinito
  if (movedBy < -100) {
    currentTranslate -= 100; // Ajustar según el ancho de la lista
  } else if (movedBy > 100) {
    currentTranslate += 100;
  }

  prevTranslate = currentTranslate;
  productList.style.transform = `translateX(${currentTranslate}px)`;
}

// Realizar el drag
function drag(e) {
  if (isDragging) {
    const currentPosition = getPositionX(e);
    currentTranslate = prevTranslate + currentPosition - startPos;
    productList.style.transform = `translateX(${currentTranslate}px)`;
  }
}

// Obtener la posición X (para mouse o touch)
function getPositionX(e) {
  return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

// Animación para hacer que el movimiento sea suave
function animation() {
  if (isDragging) {
    productList.style.transform = `translateX(${currentTranslate}px)`;
    requestAnimationFrame(animation);
  }
}