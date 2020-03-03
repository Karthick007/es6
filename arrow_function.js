// Arrow Function
// -> shorter function and behaviour of 'this' keyword

var elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];

console.log(
    elements.map(element => element.length)
);

console.log(
    elements.map(({ length: lengthFooBArX }) => lengthFooBArX)
)


var x = 10, y = 10;
// concise body syntax, implied "return"

console.log('concise body syntax, implied "return"');

var func = x => x * x;      
console.log(func(x));            

// with block body, explicit "return" needed

console.log('with block body, explicit "return" needed');

var func = (x, y) => { return x + y; }; 
console.log(func(x,y));



// this
// while searching for 'this' keyword which is not present in current scope, an arrow function ends up finding the this from its enclosing scope.
function Person(){
    this.age = 23;

    setTimeout(() => {
        this.age++
        console.log("age: " + this.age); // |this| properly refers to the Person object
    }, 1000);
}

var p = new Person();


// arrow function expressions are best suited for non-method functions. Let's see what happens when we try to use them as methods

var obj = { // does not create a new scope
    i: 10,
    b: () => console.log(this.i, this),
    c: function() {
      console.log(this.i, this);
    }
}
  
console.log(obj.b()); // prints undefined, Window {...} (or the global object)
console.log(obj.c()); // prints 10, Object {...}

// Arguments
// Arrow functions do not have their own arguments object. Thus, in this example, arguments is simply a reference to the arguments of the enclosing scope:

var arguments = [1, 2, 3];
var arr = () => arguments[0];
console.log(arr()) // 1

function foo(n) {
var f = () => {
        arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
        console.log(arguments[0]);
        console.log(n);
    }
    return f();
}

foo(3); // 6



function foo2(n) { 
    var f = (...args) => args[0] + n;
    return f(10); 
}

console.log(foo2(1)); // 11
