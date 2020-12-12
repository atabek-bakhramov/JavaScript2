/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

// line 11: a variable 'x' is declared as a constant and the number 9 is assigned as its value;
// line 12: a funcion named 'f1' is declared and a parameter called 'val' is passed to it;
// line 13: the parameter 'val' is equaled to the value of 'val' plus 1;
// line 14: the new value of the parameter 'val' is returned;
// line 16: the function f1 with a passed argument of 'x' (which equals 9) is invoked;
// line 17: the variable 'x' that equals to 9 (the const 'x' has never been mutated) is logged to the console; 
// (primitive types such as numbers, strings can never be mutated when the 'const' keyword is used);


const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

// line 28: creating a varilable 'y' and assigning an object (which is a reference type) to it;
// line 29: creating a function declration named 'f2' with one parameter called 'val';
// line 30: the property 'x' of the passed parameter 'val' (which implies that 'val' is going to be an object) equals to itself incremented by 1;
// line 31: returning the value of the 'val' parameter;
// line 33: calling the function f2 and passing an argument called 'y';
// line 34: the property of the object 'y', more specifically the key 'x' of the object 'y' stores the value of 10,
// since we incremented it (the previous key value of 'y' was 9) by 1, when the function 'f2' has been called using the object 'y' as its argument;