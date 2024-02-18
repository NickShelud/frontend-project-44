import readlineSync from "readline-sync";

export default function launchGame(task, dataForGame) {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}`);

  console.log(task);

  for (let question in dataForGame) {
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ");

    if (userAnswer == dataForGame[question]) {
      console.log("Correct!");
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${dataForGame[question]}'.`
      );
      return;
    }
  }

  console.log(`Congratulations, ${name}`);
}
