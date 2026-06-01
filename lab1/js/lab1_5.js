'use strict';

const form = document.getElementById('tableForm');
const rowsInput = document.getElementById('rowsCount');

const pattern = ['dog', 'dog', 'dog', 'cat', 'cat'];
const patternLength = pattern.length;
const animalsPerRow = 6;

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const rowsCount = parseInt(rowsInput.value, 10);

    let globalAnimalIndex = 0;

    console.clear();

    for (let i = 0; i < rowsCount; i++) {
        let rowString = '';
        for (let j = 0; j < animalsPerRow; j++) {
            const animal = pattern[globalAnimalIndex % patternLength];
            
            if (j > 0) {
                rowString += '\t';
            }
            rowString += animal;
            globalAnimalIndex++;
        }
        console.log(rowString);
    }
});

