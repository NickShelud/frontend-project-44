import launchGame from "../engine.js";
import getRandomDigit from "./function/randDigit.js";

export default function run() {
  const maxFirstDigit = 20;
  let answersAndQuestions = [];
  const gameDescription = "What number is missing in the progression?";

  for (let i = 0; i < 3; i += 1) {
    const firstDigit = getRandomDigit(maxFirstDigit);

    let progression = getProgression(firstDigit);
    let hiddenIndex = getRandomDigit(progression.length - 1);
    let correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = "..";

    answersAndQuestions[progression.join(" ")] = correctAnswer;
  }

  launchGame(gameDescription, answersAndQuestions);
}

function getProgression(firstDigit) {
  let result = [firstDigit];
  let nextDigit = firstDigit;

  while (result.length < 10) {
    nextDigit = nextDigit + firstDigit;
    result.push(nextDigit);
  }

  return result;
}
