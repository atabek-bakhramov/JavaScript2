/**
 
 ** Exercise 2: The lottery machine **
 Write a function called removeDuplicates. This function accept an array as an argument
 does not return anything but removes any duplicate elements from the array.

 The function should remove duplicate elements. So the result should be:
 ['a', 'b', 'c', 'd', 'e', 'f']

 */

'use strict';

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

// My first attemp, but it doesn't modify the original array, it creates a new array;
function takeOutDuplicates(array) {
  const newArray = array.filter((element, index) => {
    return array.indexOf(element) === index;
  });
  return newArray;
}

console.log(takeOutDuplicates(letters));
