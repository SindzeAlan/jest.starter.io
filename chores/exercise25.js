/*

15. Write a function called add with two parameters which return a promise containing the result or the error message "Must provide two parameters" in case the user provided only no or only one parameter.

*/

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a == undefined || b == undefined) {
      reject('Must provide two parameters');
    }
    else {
      resolve(a + b);
    }
  })
}

export default add
// add(2).then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });


