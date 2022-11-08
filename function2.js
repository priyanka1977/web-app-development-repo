// Java - String s = new Employee(); raise Java compiler error
// Javascript  - String s = new Employee(); raise error only when instruction is executed
// compute function
// Scope of variables
var x = 10; // local variable to anonymous function

function multiplyNumber(num1) {
  firstName = "bob"; // global variable - scope anywhere in the code
  var multiple = 5; // local variable to multiply function? Scope - inside multiplyNumber()
  {
    var z = 100; // scope - its is local variable to function. hence, scope is till end of function
  }
  for (i = 1; i <= num1; i++) {
    //var res = i * multiple; // local to multiplyNumber() function
    let res = i * multiple; // ES6 : let - block-level variable
    console.log("res = ", res);
  }
  console.log("name = ", firstName);
  console.log("x = ", x);
  console.log("value of multiple", multiple);
  console.log("z = ", z);
  console.log("res = ", res);
  return multiple * num1; //compute statement
}

var result = multiplyNumber(10);
console.log("result = ", result);
console.log("res = ", res);
/*console.log("name = ", firstName);
console.log("x = ", x);
console.log("value of multiple", multiple); // print the value - 5 or not
console.log("num1 = ", num1);
*/
