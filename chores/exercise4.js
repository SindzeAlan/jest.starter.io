/*

4. **Spread Operator:**
   Given two arrays `arr1` and `arr2`, create a new array `combinedArr` that contains all the unique elements from both arrays, sorted in ascending order.

*/


const sortedNumbersAscendingOrder = (arr1, arr2) => {
   const combinedArr = [...new Set([...arr1, ...arr2])];

   return combinedArr.sort((a, b) => a - b);
}

const firstArray = [100, 20, 3, 1];
const secondArray = [14, 50, 6,3];

console.log(sortedNumbersAscendingOrder(firstArray, secondArray));

export default sortedNumbersAscendingOrder