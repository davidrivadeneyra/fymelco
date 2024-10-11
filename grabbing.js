const thumbnailsContainer = document.querySelector('.product-thumbnails-list');
const images = document.querySelectorAll('.product-thumbnails-item img');
const indicators = document.querySelectorAll('.indicator');

// function selectImage(imageSrc) {
//     document.querySelector('.product-thumbnail-img').src = imageSrc; 
// }
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const index = Array.from(images).indexOf(entry.target);
            updateIndicators(index); 
        }
    });
}, {
    threshold: 0.5, 
});

images.forEach((img) => {
    observer.observe(img);
});

function updateIndicators(index) {
    indicators.forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}


indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        scrollToImage(index); 
    });
});

function scrollToImage(index) {
    const imageToScroll = images[index];
    const offset = imageToScroll.offsetLeft; 

    thumbnailsContainer.scrollTo({
        left: offset,
        behavior: 'smooth' 
    });

    updateIndicators(index); 
}