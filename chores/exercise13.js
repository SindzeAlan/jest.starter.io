/* 

3- Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

use in one function
*/

const multiplicationAndDivision = (num1, num2) => {
  const multiplication = num1 * num2;

  const division = (num1 / num2).toFixed(2);

  return `The multiplication of the two numbers is : ${multiplication} and Division is ${division}`;
}

console.log(multiplicationAndDivision(2.2, 2));

export default multiplicationAndDivision