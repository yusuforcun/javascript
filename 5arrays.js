// ARRAY METHODS - TEK DOSYA ÖRNEK

let arr = [1, 2, 3];

console.log("Başlangıç:", arr);

// 1. push()
arr.push(4);
console.log("push:", arr);

// 2. pop()
arr.pop();
console.log("pop:", arr);

// 3. shift()
arr.shift();
console.log("shift:", arr);

// 4. unshift()
arr.unshift(0);
console.log("unshift:", arr);

// 5. map()
let mapResult = arr.map(x => x * 2);
console.log("map:", mapResult);

// 6. filter()
let filterResult = arr.filter(x => x % 2 === 0);
console.log("filter:", filterResult);

// 7. reduce()
let reduceResult = arr.reduce((acc, cur) => acc + cur, 0);
console.log("reduce:", reduceResult);

// 8. forEach()
console.log("forEach:");
arr.forEach(x => console.log(x));

// 9. find()
let findResult = arr.find(x => x > 1);
console.log("find:", findResult);

// 10. findIndex()
let findIndexResult = arr.findIndex(x => x === 2);
console.log("findIndex:", findIndexResult);

// 11. includes()
console.log("includes:", arr.includes(2));

// 12. indexOf()
console.log("indexOf:", arr.indexOf(3));

// 13. slice()
let sliceResult = arr.slice(1, 3);
console.log("slice:", sliceResult);

// 14. splice()
let spliceArr = [...arr]; // kopya
spliceArr.splice(1, 1);
console.log("splice:", spliceArr);

// 15. sort()
let sortArr = [3, 1, 2];
sortArr.sort((a, b) => a - b);
console.log("sort:", sortArr);