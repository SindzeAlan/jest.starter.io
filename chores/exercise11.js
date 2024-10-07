/*

1- Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

*/

const guessNumber = userInput => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(`Random number is ${randomNumber}`);

  return userInput == randomNumber ? 'Good Work' : 'Not matched';
}

console.log(guessNumber(2));

export default guessNumber