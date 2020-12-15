/**
 
 ** Exercise 1: Add Six **
 
Declare a function called `createBase`.The function takes a number as a parameter and
return a closure, that adds a number to the base number argument.

Call the function three times. The return values should be:
 15, 24, 33

 */

function createBase(number) {
  let copiedNumber = number; // following the rule of no side-affects;
  return function() {
    copiedNumber += 9;
    return copiedNumber;
  };
}

// My initial solution;
// function createBase(number) {
//   return function() {
//     return number = number + 9;
//   }
// }
// 1) ESLint doesn't like the line number 24 and keeps showing the message 'Return statement should not contain assignment.'
// So I think it is not a good practice doing assignment on return (?)
// 2) I've watched a video where they say about 'no side affects'
// which as I understand means don't change the passed argument in the function (?)

const addNine = createBase(6);

// Put here your function calls...
console.log(addNine()); // returns 15
console.log(addNine()); // returns 24
console.log(addNine()); // returns 33
