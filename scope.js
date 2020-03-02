// JS interpreter assigns undefined to all scanned variables
// For example:- 
// var a = 10
// var a -> hoisted part
// a = 10 -> not hoisted part

// let keyword to declare the variables in a block scope





//** Block Scope **//

console.log("Block Scope - let");
let x = 10; 
console.log(x);

// let x; // we cannot declare one more variable with same name
if (true) {
   let x = 50; // it is valid since it is declared inside another block
   console.log(x);
}


// console.log(y);
// let y;











//** hoisting **//

// For variable or function first we need to declare and define it.
// If you define a variable by default it will be hoisted and declared as global variable and you can access it any where
// all undeclared variables are global variables

function hoist()
{
    a = 10; // it will be decalred as global variable
    var b = 9;
}
hoist();
// We can access the variable 'a' ousite the function
console.log(a);
// We cannot access the variable 'b' since it is declared inside function
//console.log(b);


// https://scotch.io/tutorials/understanding-hoisting-in-javascript#toc-undefined-vs-referenceerror






//**  Order of precedence **//
// 1. Variable assignment takes precedence over function declartion

var double = 22; // double variable assigned

function double(num) {    // double function declarion
  return (num*2);
}

console.log(typeof double);

// 2. function declaration takes precedence over variable declartion

var multiply;

function multiply(num) {
  return (num*2);
}

console.log(typeof multiply);


