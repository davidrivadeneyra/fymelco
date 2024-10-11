function selectImage(imageSrc) {

  const currentSelected = document.querySelector('.product-thumbnails-item .selected');
  if (currentSelected) {
      currentSelected.classList.remove('selected');
  }
  
  const newSelected = document.querySelector(`img[src='${imageSrc}']`);
  newSelected.classList.add('selected');
  
    document.getElementById('selected-image').src = imageSrc;
  }

