/*

9. Write a JavaScript program to filter out the specified values from a specified array. Return the original array without the filtered values.

*/

const filterOutValues = (array, valuesToFilter) => {
  return array.filter(element => !valuesToFilter.includes(element));
}

const originalArray = [1, 2, 3, 4, 5, 6];

const filteredArray = filterOutValues(originalArray, [1,3,4,7]);
console.log(filteredArray);

export default filterOutValues