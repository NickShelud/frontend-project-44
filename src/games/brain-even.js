import launchGame from '../engine.js';

export default function run() {
  const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questionsAndAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    questionsAndAnswers[randomNumber] = randomNumber % 2 === 0 ? 'yes' : 'no';
  }

  launchGame(taskDescription, questionsAndAnswers);
}
