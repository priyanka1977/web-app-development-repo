// Local variables in the function
// Objects in JavaScript - String object
function convertStringToUpperCase(name) {
  // JS Engine infers the data types by value passed to the variable
  console.log("Data type of name variable = ", typeof name);
  if (typeof name != String) {
    console.log("not a string value");
  } else {
    return name.toUpperCase();
  }
}

var str1 = convertStringToUpperCase("john");
console.log("Data type of str1 variable = ", typeof str1);
console.log("Value of str1 variable = ", str1);

var str2 = convertStringToUpperCase("john doe");
console.log("Value of str2 variable = ", str2);

var str3 = convertStringToUpperCase("100");
console.log("Value of str3 variable = ", str3);

var str4 = convertStringToUpperCase(100);
console.log("Value of str3 variable = ", str4);

//var str5 = convertStringToUpperCase(true);
//console.log("Value of str3 variable = ", str5);

//var str6 = convertStringToUpperCase(null);
//console.log("Value of str3 variable = ", str6);
