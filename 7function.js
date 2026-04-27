let msg = 'hello world'

function sayHelslo(){
    console.log(msg);
}

sayHelslo();

function printFUll(){
    let first = 'Asabah'
    let second ='Hojab'
    let space = ' '
    let full = first + space + second
    return full  

}

//write nothing
printFUll();

function multiply(num1,num2){
    return num1 * num2
}

let total  = multiply(5,2)

console.log(total)

function topla(){
    let total = 0
    for(let i = 0 ; i< arguments.length ; i++){
        total += arguments[i]
    }
    return total
}

console.log(topla(2,5,7,9,10))

//const = degistrimicem
const sayHello = (function(name){
    return `Hello ${name}`
})('tayfu')
console.log(sayHello)

;(function(){
    console.log('he yo!')
})()

;(function(){
    console.log('he yo!')
})()

function merhaba(name){
    return `hello ${name}`
}

const mer = name => `hello${name}`

console.log(mer('Amo'))

function solveLinEquation(a, b, c, x, y) {
  return a * x + b * y + c;
}

function printArray(arr){
    for(let i = 0 ; i<arr.length;i++){
        console.log(arr[i])
    }
}

printArray([1,2,3])

function swapValues(n1 , n2){
    let newn1  = n2
    let newn2 = n1
    return [newn1 , newn2]
}

console.log(swapValues(5,4))

function reverseArray(arr){
    let newArr = arr.reverse()
    return newArr
}
console.log(reverseArray([1,2,3,4,5]))
console.log(reverseArray(['y','u','s','f']))


function sum(...numbers){
    let total = 0 ;

    for(let num of numbers){
        total+=num ;
    }
    return total ;
}
console.log(sum(1,2,3))

function countries(ctr){
    let copy = [...ctr]
    return copy.reverse();
}
console.log(countries("turkey africa"))