// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';
import { didUserWin } from './utils.js';

// initialize state
let wins = 0;
let losses = 0;
let draws = 0;

// set event listeners to update state and DOM

const submitButton = document.getElementById('submitButton');
const resetButton = document.getElementById('reset');


const winSpan = document.getElementById('wins');
const loseSpan = document.getElementById('losses');
const drawSpan = document.getElementById('draws');

const announce = document.getElementById('announcement');

submitButton.addEventListener('click', () => {

    const computerSelection = getRandomThrow();
    const radioButtonSelection = document.querySelector('input:checked');
    const userSelection = radioButtonSelection.value;

    const compareSelection = didUserWin(userSelection, computerSelection);

    if (compareSelection === 'win') {
        wins++;
        winSpan.textContent = wins; 
        announce.textContent = 'You win!';
    }

    if (compareSelection === 'lose') {
        losses++;
        loseSpan.textContent = losses;
        announce.textContent = 'Forky beat you!';
    }
    if (compareSelection === 'draw') {
        draws++;
        drawSpan.textContent = draws;
        announce.textContent = 'It\'s a draw!';
    }

});

function reset() {
    wins = 0;
    losses = 0;
    draws = 0;
    winSpan.textContent = wins; 
    loseSpan.textContent = losses;
    drawSpan.textContent = draws;
    announce.textContent = '';
}




resetButton.addEventListener('click', reset);
