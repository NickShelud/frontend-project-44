import launchGame from '../engine.js';
import getRandomDigit from './function/randDigit.js';

function getGcd(firstDigit, secondDigit) {
  let commonDivisor = [];
  const smallestDigit = firstDigit > secondDigit ? secondDigit : firstDigit;

  for (let i = 0; i <= smallestDigit; i += 1) {
    if (firstDigit % i === 0 && secondDigit % i === 0) {
      commonDivisor = i;
    }
  }
  return commonDivisor;
}

export default function run() {
  const taskDescription = 'Find the greatest common divisor of given numbers.';
  const gameData = [];

  for (let i = 0; i < 3; i += 1) {
    const firstDigit = getRandomDigit();
    const secondDigit = getRandomDigit();

    const task = `${firstDigit} ${secondDigit}`;

    gameData[task] = getGcd(firstDigit, secondDigit);
  }

  launchGame(taskDescription, gameData);
}
