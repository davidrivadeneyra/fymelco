document.querySelectorAll('.card-big-button-circular ').forEach(button => {
    button.addEventListener('click', () => {
      const targetClass = button.getAttribute('data-target');
      const targetElement = document.querySelector(`.${targetClass}`);
      console.log(targetClass)
  
      if (targetElement.style.display === 'none' || targetElement.style.display === '') {
        targetElement.style.display = 'flex';
      } else {
        targetElement.style.display = 'none';
      }
    });
  });