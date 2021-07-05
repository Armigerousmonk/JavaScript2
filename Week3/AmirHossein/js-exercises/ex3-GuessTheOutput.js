/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output?
Write out your reasoning in 50 words or less.

*/
// At first it gave a the amount of 10 but in the x variable again it gave a the amount of 12. So the alert function is looking for the first amount of a and that would be 12. Also when we used let to identify the a variable 12 will replace 10.


let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();