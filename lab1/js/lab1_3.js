'use strict';

document.getElementById('numbLink').addEventListener('click', function(event) {
    const success = askForNumber();

    if (!success){
        const allowTransition = confirm("Вы не ввели нужное число. Вы всё равно хотите перейти на главную страницу?");
        if (!allowTransition) {
            event.preventDefault();
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