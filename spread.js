const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

const clonedObj = { ...obj1 };
console.log(clonedObj);
// Object { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);
// Object { foo: "baz", x: 42, y: 13 }





function myFunction(x, y, z) { 
    console.log(x,y,z);
    // 0 1 2
}
const args = [0, 1, 2];

myFunction(...args);




const dateFields = [1970, 0, 1];  // 1 Jan 1970
const d = new Date(...dateFields);
console.log(d);



const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2]; 

console.log(arr1);
//  arr1 is now [0, 1, 2, 3, 4, 5]

