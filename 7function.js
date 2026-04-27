let msg = 'hello world'

function sayHello(){
    console.log(msg);
}

sayHello();

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
