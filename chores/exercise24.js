/*

14. Write a JavaScript program to check if a string is lower case or not.

To redo

*/

function checkString(str) {

  const splitStr = str.split('')

  const stringIsUpperCase = splitStr.every((currentValue) => currentValue == currentValue.toUpperCase());

  return stringIsUpperCase ? 'The string is upper case' : 'The string is lower case';

}

console.log(checkString('HELLo'));

export default checkString



