/*

1. **Variable Declaration:**
   Declare a constant variable called `euler` and assign it the value of Euler's number (approximately 2.71828) rounded to four decimal places.

*/

const eulerRoundedNumber = () => {
   const euler = 2.71828;
   return Number(euler.toFixed(4));
}  

console.log(eulerRoundedNumber());

export default eulerRoundedNumber