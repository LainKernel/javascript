'use strict';

document.getElementById('numbLink').addEventListener('click', function(event) {
    event.preventDefault();

    const success = askForNumber();

    if (success) {
        window.location.href = 'index.html';
    } else {
        const allowTransition = confirm("Вы не ввели нужное число. Вы всё равно хотите перейти на главную страницу?");
        if (allowTransition) {
            window.location.href = 'index.html';
        }
    }
});

const askForNumber = () => {
    while (true) {
        const userInput = prompt("Пожалуйста, введите число больше 100:");

        if (userInput === null) {
            return false; 
        }

        const number = parseFloat(userInput);

        if (!isNaN(number) && number > 100) {
            return true;
        }
    }
};
