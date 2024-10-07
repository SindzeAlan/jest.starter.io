/*

8. **Map Method:**
   Given an array of strings, use the `map` method to create a new array where each string is reversed.

*/

const reversedWords = (arr) => {

  return arr.map((arr) => {
    return arr.split('').reverse().join('');
  });

}

const cars = ['Toyota', 'Ferrari', 'Jeep', 'Audi'];

console.log(reversedWords(cars));

export default reversedWords