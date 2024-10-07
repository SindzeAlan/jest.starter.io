/* 

2. Write a JavaScript program to calculate days left until next Christmas.

*/

// const daysToNextChristmas = () => {

//   const christMassDay = new Date('2024-12-25');

//   const presentDay = new Date();//This will define the actual date of the computer not store it in the variable

//   daysInMilliseconds = christMassDay.getTime() - presentDay.getTime();

//   if (christMassDay > presentDay) {

//     return daysLeft = Math.ceil(daysInMilliseconds / (1000 * 60 * 60 * 24));//The "Math.ceil()" is used to round up to ensure that any remainig partial days are counted as a full day

//   }

// }
// console.log(daysToNextChristmas())
// console.log(`It's remaining ${daysToNextChristmas()} days to christmas`);

//clean code



const daysLeftToChristmass = (date) => {

  const christMassDay = new Date((new Date()).getFullYear(), 11, 25);

  if (presentDay > christMassDay) {

    christMassDay = new Date((new Date()).getFullYear() + 1, 11, 25);

  }
  const daysInMilliseconds = christMassDay.getTime() - presentDay.getTime();

  return Math.ceil(daysInMilliseconds / (1000 * 60 * 60 * 24));

}

const presentDay = new Date(2024, 11, 24);

console.log(daysLeftToChristmass(presentDay))

// export default daysLeftToChristmas