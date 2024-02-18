import launchGame from "../engine.js";

export default function run() {
  const gameTask = "What is the result of the expression?";
  const operations = ["+", "-", "*"];
  let answersAndQuestions = [];
  for (let i = 0; i < 3; i += 1) {
    let indexOperation = Math.floor(Math.random() * operations.length);
    let operation = operations[indexOperation];
    let firstDigit = getRandomDigit();
    let secondDigit = getRandomDigit();
    let task = `${firstDigit} ${operation} ${secondDigit}`;

    answersAndQuestions[task] = getCalculate(
      operation,
      firstDigit,
      secondDigit
    );
  }
  launchGame(gameTask, answersAndQuestions);
}

function getCalculate(operation, firstDigit, secondDigit) {
  switch (operation) {
    case "+":
      return firstDigit + secondDigit;
    case "-":
      return firstDigit - secondDigit;
    case "*":
      return firstDigit * secondDigit;
  }
}

function getRandomDigit() {
  return Math.floor(Math.random() * 100) + 1;
}
