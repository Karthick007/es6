var [greeting, ...intro] = ["Hello", "I" , "am", "Sarah"];
console.log(greeting); //"Hello"
console.log(intro); //["I", "am", "Sarah"]


function getArray() {
    return ["Hello", "I" , "am", "Sarah"];
} 
var[greeting,pronoun] = getArray();

console.log(greeting);  //"Hello"
console.log(pronoun);  //"I"


// Default values can be assigned to the variables just in case the value extracted from the array is undefined.\
var[greeting = "hi",name = "Sarah"] = ["hello"];

console.log(greeting);//"Hello"
console.log(name);//"Sarah"


// Swapping Values using Destructuring Assignment

var a = 3;
var b = 6;

[a,b] = [b,a];

console.log(a);//6
console.log(b);//3




var [a, b, ...rest] = "abc,d";
console.log(a, b, rest); //"a", "b", ["c", ",", "d"]

// Object destructuring

const wes = {
    first: 'Wes',
    last: 'Bos',
    links: {
      social: {
        twitter: 'https://twitter.com/wesbos',
        facebook: 'https://facebook.com/wesbos.developer',
      },
      web: {
        blog: 'https://wesbos.com'
      }
    }
  };


const { twitter, facebook } = wes.links.social;

console.log(twitter, facebook); // logs the 2 variables 



