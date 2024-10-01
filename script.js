window.addEventListener('DOMContentLoaded', (event) => {
  const cards = document.querySelectorAll('.card');
  const leftButton = document.querySelector('.button-slider-right');
  const rightButton = document.querySelector('.button-slider-left');
  const controllefttButton = document.querySelector('.control-button-left');
  const controlrightButton = document.querySelector('.control-button-right');

  function positionButtons() {
      cards.forEach(card => {
          const img = card.querySelector('.card-img-wrapper');
          console.log(img.clientHeight)
          if (img) {
              const imgHeight = img.clientHeight; // Altura de la imagen
              const buttonOffset = (imgHeight / 2) - (leftButton.clientHeight / 2);

              // Posiciona los botones
              leftButton.style.top = `${buttonOffset}px`;
              rightButton.style.top = `${buttonOffset}px`;
              controllefttButton.style.top = `${buttonOffset}px`;
              controlrightButton.style.top = `${buttonOffset}px`;
          }
      });
  }

  // Llama a la función al cargar la página
  positionButtons();

  // También puedes llamar a esta función si cambias el tamaño de la ventana
  window.addEventListener('resize', positionButtons);
});