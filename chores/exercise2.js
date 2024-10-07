/*

2. **Arrow Functions:**
   Write an arrow function called `findMax` that takes an array of numbers as input and returns the largest number in the array. Use the spread operator and Math.max() function.

*/

const findMax = (arr) => {
  return Math.max(...arr); 
}

console.log(findMax([1, 5, 80, 7, 9, 100]));

export default findMax


/*
    Here is an alternative to find the maximum number of an array wihout using the Math.max function

    const findMax = (arr) => {
        let maxValue = 0;

        for(let i = 0; i < arr.length; i++){
            if(maxValue < arr[i]){
                maxValue = arr[i];
            }
        }

        return maxValue;
    }
    
    findMax([2, 4, 50, 1, 90, 0]);
*/