// const variable cannot be reassigned (immutable)
// if it is an object or array we can alter values or add new properties or values.

const PI = 3.14;
console.log("PI = " + PI);

// PI = 3;
// console.log(PI);

const obj = {"name": "Karthick"};
obj.qualification = "B.E";

console.log(obj);

obj.name = "KKK"
console.log(obj);

// const obj2 = {}
// obj = obj2;
// console.log(obj);


const arr = [1,2,3];
arr[0] = 9;
arr[3] = 10;

console.log(arr);