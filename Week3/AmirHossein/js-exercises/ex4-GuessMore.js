/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output?
Write out your reasoning in 50 words or less.

*/
// The first answer will be 10. Beacuse we gave variable the amount of 9 and we will recive 10.
// The second answer is also 10, because here we are adding 1 to the value of X.

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);