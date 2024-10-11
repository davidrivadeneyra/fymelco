const thumbnailsContainer = document.querySelector('.product-thumbnails-list');
const images = document.querySelectorAll('.product-thumbnails-item img');
const indicators = document.querySelectorAll('.indicator');

// Función para seleccionar la imagen actual
function selectImage(imageSrc) {
    document.querySelector('.product-thumbnail-img').src = imageSrc; // Cambia la imagen principal, si es aplicable
}

// Configurar IntersectionObserver para observar cada imagen
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const index = Array.from(images).indexOf(entry.target);
            updateIndicators(index); // Actualiza los círculos cuando una imagen es visible
        }
    });
}, {
    threshold: 0.5, // Consideramos la imagen visible cuando al menos el 50% de ella está en pantalla
});

// Asociamos el observador a cada imagen
images.forEach((img) => {
    observer.observe(img);
});

// Función para actualizar el estado de los círculos
function updateIndicators(index) {
    indicators.forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Añadir funcionalidad para que al hacer clic en un círculo, haga scroll a la imagen correspondiente
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        scrollToImage(index); // Desplaza al índice de la imagen correspondiente
    });
});

// Función para desplazar el contenedor a una imagen en particular
function scrollToImage(index) {
    const imageToScroll = images[index];
    const offset = imageToScroll.offsetLeft; // Obtener la posición horizontal de la imagen

    thumbnailsContainer.scrollTo({
        left: offset,
        behavior: 'smooth' // Desplazamiento suave
    });

    updateIndicators(index); // Actualizar los indicadores para reflejar el cambio
}