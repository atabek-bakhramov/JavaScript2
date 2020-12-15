/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();

// line 11: in the global scope we declare a variable 'a' using the 'let' keyword and assign the number 10 to it;
// line 12 we create a variable 'x' using the const keyword and assign IIFE (Immediately Invoked Function Expression) to it;
// line 13: inside the function we reassign the value of the variable 'a' to 12. JS engine looks into the local scope
// whether or not the variable 'a' is familiar to it, since it doesn't know it in that scope, it looks in the outer scope
// and finds it in the global scope where it has been declared and 10 assgined to it.
// Since it is IIFE, it immediately reassignes the value of the 'a' variable to 12 in the global scope;
// line 14: we return a closure function which alerts the variable 'a' with the value of 12;
// line 19: when we invoke the 'x' function, we get an alert with the value of 12;
