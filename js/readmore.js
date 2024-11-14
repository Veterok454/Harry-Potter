// Отримуємо всі кнопки з класом toggle-button
document.querySelectorAll('.toggle-button').forEach(button => {
  button.addEventListener('click', () => {
    // Знаходимо попередній елемент, тобто блок product-details
    const details = button.previousElementSibling;
    const arrow = button.querySelector('.arrow');

    // Перевіряємо, чи блок product-details зараз є видимим
    if (details.classList.contains('visible')) {
      details.classList.remove('visible');
      button.querySelector('span').textContent = 'Read more';
      arrow.classList.remove('rotate');
    } else {
      details.classList.add('visible');
      button.querySelector('span').textContent = 'Hide';
      arrow.classList.add('rotate');
    }
  });
});

document.querySelectorAll('.toggle-button').forEach(button => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.card');
    const extraInfo = productCard.querySelector('.details');
    const overlay = productCard.querySelector('.overlay');

    // Перемикання видимості додаткової інформації
    if (extraInfo.style.display === 'block') {
      extraInfo.style.display = 'none';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Приховуємо затемнення
    } else {
      extraInfo.style.display = 'block';
      overlay.style.backgroundColor = 'rgba(29, 29, 29, 0.7)'; // Застосовуємо затемнення
    }
  });
});
