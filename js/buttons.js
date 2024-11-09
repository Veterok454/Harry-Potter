const showAllBtn = document.getElementById('show-all-btn');
const categoryButtons = document.getElementById('category-buttons');
const houseButtons = document.getElementById('house-buttons');
const categoryTitle = document.getElementById('category-title');
const cards = document.querySelectorAll('.card');
const categoryBtnList = document.querySelectorAll('.category-btn');
const houseBtnList = document.querySelectorAll('.house-btn');

// Показуємо кнопки категорій при натисканні на "Всі персонажі"
showAllBtn.addEventListener('click', () => {
  categoryButtons.style.display = 'block'; // Показуємо кнопки категорій
  showAllBtn.style.display = 'none'; // Ховаємо кнопку "Всі персонажі"
});

// Додаємо подію на кнопки категорій
categoryBtnList.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');

    // Робимо активною натиснуту кнопку і деактивуємо інші
    categoryBtnList.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // При натисканні на "Персонажі конкретного будинку" показуємо кнопки будинків
    if (category === 'houses') {
      categoryTitle.textContent = 'Characters in a particular house';
      houseButtons.style.display = 'block';
      hideAllCards(); // Ховаємо всі картки до вибору будинку
    } else {
      houseButtons.style.display = 'none'; // Ховаємо кнопки будинків
      showCards(category); // Показуємо картки вибраної категорії
      categoryTitle.textContent =
        category === 'students' ? 'Hogwarts students' : 'Hogwarts staff';
    }
  });
});

// Додаємо подію на кнопки будинків
houseBtnList.forEach(button => {
  button.addEventListener('click', () => {
    const house = button.getAttribute('data-house');

    // Робимо активною натиснуту кнопку і деактивуємо інші
    houseBtnList.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Змінюємо заголовок і показуємо картки персонажів обраного будинку
    categoryTitle.textContent = `Characters of ${button.textContent}`;
    showCards(house);
  });
});

// Функція для відображення карток відповідної категорії
function showCards(category) {
  cards.forEach(card => {
    if (card.classList.contains(category)) {
      card.style.display = 'block'; // Показуємо картку
    } else {
      card.style.display = 'none'; // Ховаємо картку
    }
  });
}

// Функція для приховування всіх карток
function hideAllCards() {
  cards.forEach(card => (card.style.display = 'none'));
}
