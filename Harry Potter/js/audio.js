// Отримуємо елемент аудіо і кнопку
const audio = document.getElementById('background-music');
const playButton = document.getElementById('show-all-btn');

// Встановлюємо гучність на 10%
audio.volume = 0.02;

// Обробник для кнопки, щоб почати відтворення музики після кліку
playButton.addEventListener('click', () => {
  audio.play();
});
