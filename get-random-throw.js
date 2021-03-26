export function getRandomThrow() {
    const randomNumber = Math.ceil(Math.random() * 3);
    // console.log(randomNumber);

    if (randomNumber === 1) return 'rock';
    if (randomNumber === 2) return 'paper';
    if (randomNumber === 3) return 'scissors';


    
}