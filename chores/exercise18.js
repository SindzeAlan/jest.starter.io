/*
  
 8. Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.
  
 */


const duplicatePropertiesOfObject = (obj1, obj2) => {

  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (obj1[key] !== obj2[key]) {
        return `The two objects does not have properties and values in commun`;
      }
    }
  }
  return `The two objects have properties and values in commun`;
}

const object1 = { name: 'Alice', agge: 25, citjy: 'Paris' };
const object2 = { agwe: 25, city: 'Paris' };
const object3 = { age: 30, citys: 'Paris' };

console.log(duplicatePropertiesOfObject(object1, object2));
console.log(duplicatePropertiesOfObject(object1, object3)); 

export default duplicatePropertiesOfObject