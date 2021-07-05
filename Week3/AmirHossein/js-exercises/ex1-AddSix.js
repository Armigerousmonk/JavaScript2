/**

 ** Exercise 1: Add Six **

Declare a function called `createBase`.The function takes a number as a parameter and
return a closure, that adds a number to the base number argument.

Call the function three times. The return values should be:
 15, 24, 33

 */

function createBase(a) {
  // Put here your logic...
  return function(b){

    return console.log(a+b);
  }
}

const addSix = createBase(6);

// Put here your function calls...

addSix(9);
addSix(18);
addSix(27);
