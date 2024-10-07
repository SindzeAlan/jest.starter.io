/*

5. Write a JavaScript program to get the largest even number from an array of integers.

*/

// Use a function here

const largestEvenNumber = (arr) => Math.max(...arr.filter((num) => num % 2 === 0));

console.log(`The largest even number is: ${largestEvenNumber([1, 2, 3, 40, 5, 6, 7, 8, 9, 10, 20, 15, 14, 99, 90])}`);

export default largestEvenNumber