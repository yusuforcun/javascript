// PRIMITIVE TYPES

let str = "Hello";          // string
let num = 42;              // number
let bool = true;           // boolean
let empty = null;          // null
let notDefined;            // undefined
let sym = Symbol("id");    // symbol
let big = 123456789012345678901234567890n; // bigint

console.log("PRIMITIVES:");
console.log(str, num, bool, empty, notDefined, sym, big);


// NON-PRIMITIVE TYPES

let obj = { name: "Ali", age: 25 }; // object
let arr = [1, 2, 3];                // array
function greet() {                  // function
  return "Hi!";
}

console.log("\nNON-PRIMITIVES:");
console.log(obj);
console.log(arr);
console.log(greet());


// REFERENCE vs VALUE farkı

let a = 10;
let b = a;
b = 20;

console.log("\nPrimitive kopyalama:");
console.log(a); // 10
console.log(b); // 20

let x = { val: 10 };
let y = x;
y.val = 20;

console.log("\nReference kopyalama:");
console.log(x.val); // 20
console.log(y.val); // 20