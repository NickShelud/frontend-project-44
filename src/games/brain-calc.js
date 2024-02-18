import launchGame from '../engine.js';

function getCalculate(operation, firstDigit, secondDigit) {
  switch (operation) {
    case '+':
      return firstDigit + secondDigit;
    case '-':
      return firstDigit - secondDigit;
    case '*':
      return firstDigit * secondDigit;
  }
}

function getRandomDigit() {
  return Math.floor(Math.random() * 100) + 1;
}

export default function run() {
  const gameTask = 'What is the result of the expression?';
  const operations = ['+', '-', '*'];
  const answersAndQuestions = [];
  for (let i = 0; i < 3; i += 1) {
    const indexOperation = Math.floor(Math.random() * operations.length);
    const operation = operations[indexOperation];
    const firstDigit = getRandomDigit();
    const secondDigit = getRandomDigit();
    const task = `${firstDigit} ${operation} ${secondDigit}`;

    answersAndQuestions[task] = getCalculate(
      operation,
      firstDigit,
      secondDigit,
    );
  }
  launchGame(gameTask, answersAndQuestions);
}