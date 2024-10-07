/*

10.Write a JavaScript program to extract out the values at the specified indexes from a specified array.

*/

const valuesExtractedByIndexes = (arr, indexes) => {
  return indexes.map((index) => arr[index]);
}

const arrayOfIntergers = [2, 4, 8, 90, 12];

console.log(valuesExtractedByIndexes(arrayOfIntergers, [0,4,2]));

export default valuesExtractedByIndexes