// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin } from '../utils.js';

const test = QUnit.test;


//Testing for all wins
test('if user throws paper and computer throws rock, return wins', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    let expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    let actual = didUserWin('paper', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if user throws rock and computer throws scissors, return win', (expect) => {

    let expected = 'win';

    let actual = didUserWin('rock', 'scissors');

    expect.equal(actual, expected);
});

test('if user throws scissors and computer throws paper, return win', (expect) => {

    let expected = 'win';

    let actual = didUserWin('scissors', 'paper');

    expect.equal(actual, expected);
});

//Testing for all losses
test('if user throws rock and computer throws paper, return lose', (expect) => {

    let expected = 'lose';

    let actual = didUserWin('rock', 'paper');

    expect.equal(actual, expected);
});
test('if user throws paper and computer throws scissors, return lose', (expect) => {

    let expected = 'lose';

    let actual = didUserWin('paper', 'scissors');

    expect.equal(actual, expected);
});
test('if user throws scissors and computer throws rock, return lose', (expect) => {

    let expected = 'lose';

    let actual = didUserWin('scissors', 'rock');

    expect.equal(actual, expected);
});

//Testing for all draws
test('if user throws scissors and computer throws scissors, return draw', (expect) => {

    let expected = 'draw';

    let actual = didUserWin('scissors', 'scissors');

    expect.equal(actual, expected);
});
test('if user throws rock and computer throws rock, return draw', (expect) => {

    let expected = 'draw';

    let actual = didUserWin('rock', 'rock');

    expect.equal(actual, expected);
});
test('if user throws paper and computer throws paper, return draw', (expect) => {

    let expected = 'draw';

    let actual = didUserWin('paper', 'paper');

    expect.equal(actual, expected);
});
