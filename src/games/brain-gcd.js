import launchGame from "../engine.js";
import getRandomDigit from "./function/randDigit.js";

export default function run() {
  const taskDescription = "Find the greatest common divisor of given numbers.";
  let gameData = [];

  for (let i = 0; i < 3; i += 1) {
    let firstDigit = getRandomDigit();
    let secondDigit = getRandomDigit();

    let task = `${firstDigit} ${secondDigit}`;

    gameData[task] = getGcd(firstDigit, secondDigit);
  }

  launchGame(taskDescription, gameData);
}

function getGcd(firstDigit, secondDigit) {
  let commonDivisor = [];
  let smallestDigit = firstDigit > secondDigit ? secondDigit : firstDigit;

  for (let i = 0; i <= smallestDigit; i += 1) {
    if (firstDigit % i == 0 && secondDigit % i == 0) {
      commonDivisor = i;
    }
  }
  return commonDivisor;
}
