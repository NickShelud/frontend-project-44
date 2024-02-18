import launchGame from "../engine.js";
import getRandomDigit from "./function/randDigit.js";

export default function run() {
  const taskDescription =
    'Answer "yes" if given number is prime. Otherwise answer "no".';
  let answersAndQuestions = [];

  for (let i = 0; i < 3; i += 1) {
    let digit = getRandomDigit();

    answersAndQuestions[digit] = isPrime(digit);
  }

  launchGame(taskDescription, answersAndQuestions);
}

function isPrime(digit) {
  for (let i = 2; i < digit; i += 1) {
    if (digit % i == 0) {
      return "no";
    }
  }

  return "yes";
}