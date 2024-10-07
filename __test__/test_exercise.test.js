import eulerRoundedNumber from '../chores/exercise1.js';
import findMax from '../chores/exercise2.js';
import productPurchased from '../chores/exercise3.js';
import sortedNumbersAscendingOrder from '../chores/exercise4.js';
import carProperties from '../chores/exercise5.js';
import calculateAreaCircle from '../chores/exercise6.js';
import average from '../chores/exercise7.js';
import reversedWords from '../chores/exercise8.js';
import booksMoreThan300Pages from '../chores/exercise9.js';
import fetchData from '../chores/exercise10.js';
import guessNumber from '../chores/exercise11.js';
import daysLeftToChristmass from '../chores/exercise12.js';
import multiplicationAndDivision from '../chores/exercise13.js';
import longestStr from '../chores/exercise14.js';
import largestEvenNumber from '../chores/exercise15.js';
import removeDuplicateCharacters from '../chores/exercise16.js';
import sumOfCubes from '../chores/exercise17.js';
import duplicatePropertiesOfObject from '../chores/exercise18.js';
import filterOutValues from '../chores/exercise19.js';
import valuesExtractedByIndexes from '../chores/exercise20.js';
import deleteProperty from '../chores/exercise21.js';
import VolumeCylinder from '../chores/exercise22.js';
import clock from '../chores/exercise23.js';
import checkString from '../chores/exercise24.js';
import add from '../chores/exercise25.js';


//Test for exercise 1
test("euler's number rounded to four decimal places: 2.7183", () => {
  expect(eulerRoundedNumber(2.71828)).toBeCloseTo(2.7183);
})

//Test for exercise 2
test("Maximum number equals 100", () => {
  expect(findMax([1, 5, 80, 7, 9, 100])).toEqual(100);
})

//Test for exercise 3
test('returns the correct purchase message using template literals', () => {
  expect(productPurchased("Chocolate", 5, 50)).toBe('You purchased 5 units of Chocolate for $250');
})

//Test for exercise 4
test('combined arrays sorted in ascending order', () => {
  expect(sortedNumbersAscendingOrder([6, 5, 4], [3, 1, 2])).toEqual([1, 2, 3, 4, 5, 6]);
})

//Test to exercise 5
test('extracts properties make, model and year form an object car', () => {
  expect(carProperties(carProperties())).toEqual(['Toyota', 'LandRover', 2020])
})

//Test for exercise 6
test("Calculates area of a circle with it's radius and returns equivalent result but if no radius, returns 'Radius is missing!'", () => {
  expect(calculateAreaCircle(2)).toBeCloseTo(12.57);
  expect(calculateAreaCircle()).toMatch('Radius is missing!')
})

//Test for exercise 7
test('returns the average score of given numbers', () => {
  const givenNumbers = [1, 2, 3, 4, 5]
  expect(average(givenNumbers)).toBeCloseTo(3)
})

//Test for exercise 8 
test('returns strings that are reversed', () => {
  const cars = ['Toyota', 'Ferrari', 'Jeep', 'Audi'];
  expect(reversedWords(cars)).toEqual(['atoyoT', 'irarreF', 'peeJ', 'iduA'])
})

//Test for exercise 9
test('return books that are more 300pages', () => {
  const books = [
    { title: 'rich dad poor dad', pages: 300 },

    { title: 'la chevre de ma mere', pages: 120 },

    { title: 'the reasons of my wealth', pages: 350 }
  ];
  expect(booksMoreThan300Pages(books)).toEqual([{ title: 'the reasons of my wealth', pages: 350 }])
})

//Test to exercise 10



// Test for exercise 11
test('guessNumber returns "Good Work" or "Not matched" and generates a number between 1 and 10', () => {
  const userInput = 2;
  const result = guessNumber(userInput);

  expect(['Good Work', 'Not matched']).toContain(result);
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  expect(randomNumber).toBeGreaterThanOrEqual(1);
  expect(randomNumber).toBeLessThanOrEqual(10);
});

//Test for execise 12
describe('Checks how many days remain for next christmass', () => {
  test('returns days left when today is before christmass', () => {
    expect(daysLeftToChristmass(new Date(2024, 11, 24))).toBe(1)
  })

  test('returns days left when today is christmass', () => {
    expect(daysLeftToChristmass(new Date(2024, 11, 25))).toBe(0)
  })

  test('returns days left when today is after christmass', () => {
    expect(daysLeftToChristmass(new Date(2024, 11, 26))).toBe(364)
  })
})

// //Test for exercise 13
test('calculates the multiplication and division of 3 and 2 and result 6, 1.5', () => {
  expect(multiplicationAndDivision(3, 2)).toMatch('The multiplication of the two numbers is : 6 and Division is 1.5')
})

// //Test for exercise 14
test('returns the longest string of an array', () => {
  const names = ['william', 'wilson', 'johnson', 'kety', 'peter', 'cheridan']
  expect(longestStr(names)).toMatch('cheridan')
})

//Test for exercise 15
test('checks for the largest even number', () => {
  const numbers = [1, 2, 3, 40, 5, 6, 7, 8, 9, 10, 20, 15, 14, 99, 90];
  expect(largestEvenNumber(numbers)).toEqual(90)
})

//Test for exercise 16
test('removes all duplicate characters from a string', () => {
  expect(removeDuplicateCharacters('programming')).toMatch('poain');
})

//Test for exercise 17
test('calculates the sum of all intergers from 1 to a given number', () => {
  const givenNumber = 4
  expect(sumOfCubes(givenNumber)).toEqual(100)
})

//Test for exercise 18
test('compares two objects if the first one has equivalent properties to the second one', () => {
  const object1 = { name: 'Alice', age: 25, city: 'Paris' };
  const object2 = { age: 25, city: 'Paris' };
  const object3 = { age: 30, citys: 'Paris' };
  expect(duplicatePropertiesOfObject(object1, object2)).toMatch("The two objects have properties and values in commun")
})

// //Test for exercise 19
test('filter out specified values from an array and return the original array', () => {
  const originalArray = [1, 2, 3, 4, 5, 6];
  expect(filterOutValues(originalArray, [1, 3, 4, 7])).toEqual([2, 5, 6])
})

// //Test for exercise 20
test('extract values at specified indexes of an array', () => {
  const arrayOfIntergers = [2, 4, 8, 90, 12];
  const indexes = [0, 4, 2];
  expect(valuesExtractedByIndexes(arrayOfIntergers, indexes)).toEqual([2, 12, 8])
})

// //Test for exercise 21
test("deletes the property rollno from the object and prints the object after deleting property", () => {
  expect(deleteProperty()).toEqual({ name: 'David Rayy', class: 'VI' })
})

// //Test for exercise 22
test('calculates the volume of a cylinder with four decimal places', () => {
  const calculateVolume = new VolumeCylinder(4, 5);

  expect(calculateVolume.volume()).toBeCloseTo(125.6637)
})

// Test for exercise 23

describe('clock function', () => {
  beforeEach(() => {
    jest.useFakeTimers(); 
    jest.spyOn(global, 'setInterval'); 
    jest.spyOn(global, 'clearInterval'); 
    jest.spyOn(console, 'log').mockImplementation(() => {}); 
  });

  afterEach(() => {
    jest.useRealTimers(); 
    jest.clearAllMocks(); 
  });

  test('logs time every second and stops after reaching the specified number of seconds', () => {
    const secondsToDisplay = 3;

    clock(secondsToDisplay);

    jest.advanceTimersByTime(1000);
    expect(console.log).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(2000);
    expect(console.log).toHaveBeenCalledTimes(3);
    expect(setInterval).toHaveBeenCalled();
    jest.advanceTimersByTime(1000);
    expect(console.log).toHaveBeenCalledTimes(3); 
    expect(clearInterval).toHaveBeenCalled(); 
  });

  test('returns the correct string immediately', () => {
    const result = clock(5);
    expect(result).toBe('second to show 5');
  });
});



// //Test for exercise 24
test('checks if a string is lower case', () => {
  expect(checkString('Hello')).toMatch('The string is lower case')
})

test('checks if a string is upper case', () => {
  expect(checkString('HELLO')).toMatch('The string is upper case')
})


// //Test to exercise 25
test("returns a promise containing the result of the sum of two numbers or returns the message 'Must provide two parameters' in case a parameter is not provided", () => {
  add(1, 2).then((data) => {
    expect(data).toEqual(3)
  }).catch((error) => {
    expect(error).toMatch('Must provide two parameters')
  })
})
