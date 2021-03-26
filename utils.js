export function didUserWin(player, computer) {


    if (player === 'paper' && computer === 'paper')     return 'draw';
    if (player === 'rock' && computer === 'rock')       return 'draw';
    if (player === 'scissors' && player === 'scissors') return 'draw';

    if (player === 'rock' && computer === 'scissors')   return 'win';
    if (player === 'paper' && computer === 'rock')      return 'win';
    if (player === 'scissors' && player === 'paper')    return 'win';

    if (player === 'rock' && computer === 'paper')      return 'lose';
    if (player === 'paper' && computer === 'scissors')  return 'lose';
    if (player === 'scissors' && player === 'rock')     return 'lose';
}