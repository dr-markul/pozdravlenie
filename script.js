// Получаем кнопки и эффекты
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const fireworksContainer = document.getElementById('fireworks');
const rainContainer = document.getElementById('rain');
const lightningContainer = document.getElementById('lightning');

// Функция для генерации фейерверков
function createFireworks(x, y) {
    const numberOfSparks = 100;  // Больше искр для более яркого эффекта
    for (let i = 0; i < numberOfSparks; i++) {
        const spark = document.createElement('div');
        spark.classList.add('spark');

        // Случайное направление и расстояние для каждой искры
        const angle = Math.random() * 360;
        const distance = Math.random() * 300;
        const xOffset = Math.cos(angle) * distance;
        const yOffset = Math.sin(angle) * distance;

        // Устанавливаем кастомные свойства для анимации
        spark.style.setProperty('--x', `${xOffset}px`);
        spark.style.setProperty('--y', `${yOffset}px`);
        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;

        fireworksContainer.appendChild(spark);

        // Удаляем искры через 1.5 секунды
        setTimeout(() => {
            spark.remove();
        }, 1500);
    }
}

// Функция для отображения дождя
function showRain() {
    rainContainer.style.display = 'block';
    const numDrops = 100;
    for (let i = 0; i < numDrops; i++) {
        const drop = document.createElement('div');
        drop.classList.add('drop');
        drop.style.left = `${Math.random() * 100}vw`;
        drop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
        rainContainer.appendChild(drop);

        setTimeout(() => {
            drop.remove();
        }, 1000); // Удалить капли через 1 секунду
    }
}

// Функция для отображения молний
function showLightning() {
    lightningContainer.style.display = 'block';
    const strike = document.createElement('div');
    strike.classList.add('strike');
    strike.style.left = `${Math.random() * 100}vw`;
    lightningContainer.appendChild(strike);

    setTimeout(() => {
        strike.remove();
    }, 200); // Молния исчезает через 200мс
}

// Функция для отображения фейерверков, шариков и сердечек
function showFireworksAndHearts(event) {
    fireworksContainer.style.display = 'block';
    createFireworks(event.clientX, event.clientY);


    // Сердечки
    const numHearts = 15;
    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.bottom = `-${Math.random() * 30 + 10}vh`;
        heart.innerHTML = '❤️';  // Используем смайлик сердечка
        document.body.appendChild(heart);
    }
}

// Слушатели событий для кнопок
yesButton.addEventListener('click', function (event) {
    showFireworksAndHearts(event);
});

noButton.addEventListener('click', function () {
    showRain();
    showLightning();
});
