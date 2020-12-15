/**
 
 ** Exercise 5: The lottery machine **
 
Don't you just love the thrill of the lottery? What if I told you we can make our own lottery machine? Let'
 s get started!

   Write a
 function that takes 4 arguments.

   - A start value
   - An end value
   - A callback that executes if the number is divisible by 3
   - A callback that executes if the number is divisible by 5

 The  function should first generate an array containing values from start value to end value(inclusive).

 Then the  function should take the newly created array and iterate over it, and calling the first callback
 if the array value is divisible by 3.

 The function should call the second callback
 if the array value is divisible by 5.

 Both functions should be called
 if the array value is divisible by both 3 and 5.

*/

function sayDividableByThree(val) {
  console.log(`${val} is dividable by 3`);
}
function sayDividableByFive(val) {
  console.log(`${val} is dividable by 5`);
}

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const newArray = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    newArray.push(i);
  }
  for (let i = 0; i < newArray.length; i++) {
    const iteratedValue = newArray[i]; // for easier/nicer readabilty;
    if (iteratedValue % 3 === 0) {
      threeCallback(iteratedValue);
    }
    if (iteratedValue % 5 === 0) {
      fiveCallback(iteratedValue);
    }
  }
}

threeFive(10, 15, sayDividableByThree, sayDividableByFive);

// Should create an array [10,11,12,13,14,15]
// and call sayFive, sayThree, sayThree, sayFive
