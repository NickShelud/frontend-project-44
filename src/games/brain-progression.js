import launchGame from '../engine.js';
import getRandomDigit from './function/randDigit.js';

function getProgression(firstDigit) {
  const result = [firstDigit];
  let nextDigit = firstDigit;

  while (result.length < 10) {
    nextDigit += firstDigit;
    result.push(nextDigit);
  }

  return result;
}

export default function run() {
  const maxFirstDigit = 20;
  const answersAndQuestions = [];
  const gameDescription = 'What number is missing in the progression?';

  for (let i = 0; i < 3; i += 1) {
    const firstDigit = getRandomDigit(maxFirstDigit);

    const progression = getProgression(firstDigit);
    const hiddenIndex = getRandomDigit(progression.length - 1);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    answersAndQuestions[progression.join(' ')] = correctAnswer;
  }

  launchGame(gameDescription, answersAndQuestions);
}
