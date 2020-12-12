/**
 
 ** Exercise 1: Add Six **
 
Declare a function called `createBase`.The function takes a number as a parameter and
return a closure, that adds a number to the base number argument.

Call the function three times. The return values should be:
 15, 24, 33

 */

function createBase(number) {
  return function() {
    return number = number + 9;
  }
}

const addNine = createBase(6);

// Put here your function calls...
addNine(); // returns 15
addNine(); // returns 24
addNine(); // returns 33
