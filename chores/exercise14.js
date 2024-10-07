/*

4. Write a JavaScript program to find the longest string from a given array.

use ES6
*/

const longestStr = (arr) => {

  const longest = arr.reduce((accumulator,currentValue) => {
    return accumulator.length < currentValue.length ? currentValue : accumulator;
  })

  return longest;
}

const str = ['111', '111', '1111', '1111', '0' , '1', 'jjjjjjjjjj'];

console.log(`The longest string of the given array is "${longestStr(str)}"`);

export default longestStr