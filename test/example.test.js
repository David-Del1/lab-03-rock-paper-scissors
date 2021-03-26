// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin } from '../utils.js';

const test = QUnit.test;

test('if there is a draw, return draw', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    let expected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    let actual = didUserWin('paper', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if there is a win, return win', (expect) => {

    let expected = 'win';

    let actual = didUserWin('paper', 'rock');

    expect.equal(actual, expected);
});

test('if there is a loss, return lose', (expect) => {

    let expected = 'lose';

    let actual = didUserWin('paper', 'scissors');

    expect.equal(actual, expected);
});
