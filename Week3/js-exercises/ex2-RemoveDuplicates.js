/**
 
 ** Exercise 2: The lottery machine **
 Write a function called removeDuplicates. This function accept an array as an argument
 does not return anything but removes any duplicate elements from the array.

 The function should remove duplicate elements. So the result should be:
 ['a', 'b', 'c', 'd', 'e', 'f']

 */

'use strict';

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

// One way
function takeOutDuplicates(array) {
  const newArray = array.filter((element, index) => {
    return array.indexOf(element) === index;
  });
  return newArray;
}

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

console.log(takeOutDuplicates(letters));
