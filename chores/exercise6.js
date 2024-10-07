/*

6. **Default Parameters:**
   Write a function called `calculateArea` that takes the radius of a circle as a parameter. The function should return the area of the circle. If no radius is provided, the function should throw an error with the message "Radius is missing!".

*/

const calculateAreaCircle = (radius) =>  radius === undefined ? radius = "Radius is missing!" : Number((Math.PI * (radius * radius)).toFixed(2));

console.log(calculateAreaCircle(2));

export default calculateAreaCircle