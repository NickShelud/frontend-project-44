export default function getRandomDigit(maxDigit = 100) {
  return Math.floor(Math.random() * maxDigit) + 1;
}
