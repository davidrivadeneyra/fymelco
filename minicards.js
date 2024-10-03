document.querySelectorAll('.card-big-button-circular ').forEach(button => {
    button.addEventListener('click', () => {
      const targetClass = button.getAttribute('data-target');
      const targetElement = document.querySelector(`.${targetClass}`);
      console.log(targetClass)
  
      if (targetElement.classList.contains('minicard-shadow')) {
        targetElement.classList.remove('minicard-shadow');
      } else {
        targetElement.classList.add('minicard-shadow');
      }
    });
  });