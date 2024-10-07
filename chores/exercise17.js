/**
 
7. Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given integer.

 */

  const sumOfCubes = (number) => {
    if(number < 1){
      return 0
    }

    return Math.pow(number, 3) + sumOfCubes(number - 1);
  };
  
  const givenInteger = 4; 
  console.log(`The sum of cubes from 1 to ${givenInteger} is: ${sumOfCubes(givenInteger)}`);

  export default sumOfCubes


// const sumOfCubesIntergers = (arr) => {

//   const sum = arr.reduce((accumulator, currentValue) => {
//     return accumulator + Math.pow(currentValue, 3);
//   })

//   return sum;

// }

// console.log(sumOfCubesIntergers([1,2,3]))