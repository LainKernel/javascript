'use strict';

document.getElementById('crowForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const num = parseInt(document.getElementById('num').value, 10);

    if (isNaN(num) || num < 0) {
        alert("Пожалуйста, введите корректное целое число ворон.");
        return;
    }

    const lastTwoDigits = num % 100;
    const lastDigit = num % 10;

    let word = "";

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        word = "ворон";
    } else {
        
        switch (lastDigit) {
            case 1:
                word = "ворона";
                break;
            case 2:
            case 3:
            case 4:
                word = "вороны";
                break;
            default:
                word = "ворон";
                break;
        }
    }

    alert(`На ветке сидит ${num} ${word}`);
});
