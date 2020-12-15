/**
 
 ** Exercise 2: The lottery machine **
 Write a function called removeDuplicates. This function accept an array as an argument
 does not return anything but removes any duplicate elements from the array.

 The function should remove duplicate elements. So the result should be:
 ['a', 'b', 'c', 'd', 'e', 'f']

 */

 /**
 * Checks your solution against correct solution
 * @param {Array} array your solution
 * @returns boolean
 */
function checkSolution(array) {
  const solution = ['a', 'b', 'c', 'd', 'e', 'f'];
  if (array == null) return false;
  if (array.length !== solution.length) return false;

  for (let i = 0; i < solution.length; i++) {
    if (array[i] !== solution[i]) return false;
  }
  return true;
}

// 'use strict';

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

// One way
// function takeOutDuplicates(array) {
//   const newArray = array.filter((element, index) => {
//     return array.indexOf(element) === index;
//   });
//   return newArray;
// }

// Another way;
// function takeOutDuplicates(array) {
//   const noDuplicatesObj = new Set(array);
//   const newArray = Array.from(noDuplicatesObj);
//   return newArray;
// }

// Third way;
// function takeOutDuplicates(array) {
//   return array.filter((element, index, passedArray) => {
//     return passedArray.indexOf(element) === index;
//   });
// }

// Forth way;
// function takeOutDuplicates(array) {
//   const newArray = [];
//   array.forEach(element => {
//     if (newArray.indexOf(element) === -1) {
//       newArray.push(element);
//     }
//   });
//   return newArray;
// }

// The solutation of mutating the original array (bad practice I suppose since we are mutating the original array)
function takeOutDuplicates(array) {
  const differentElements = [];
  for (let i = 0; i < array.length; i++) {
    if (differentElements.includes(array[i])) {
      array.splice(i, 1);
      i--;
    } else {
      differentElements.push(array[i]);
    }
  }
}

takeOutDuplicates(letters);

if (checkSolution(letters)) {
  console.log("Hooray!");
} else {
  console.log('Not hooray!');
}
