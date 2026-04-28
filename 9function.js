const fonksiyon = number => number ** 2 

function cube(cb,number){
    return cb(number) * number 
}

console.log(cube(fonksiyon,3)) 

const a = s1 => {
        const b = s2 =>{
            const c = s3 =>{
                return(s1+s2+s3)
                    }
                return c
    }
    return b
}

console.log(a(5)(10)(20))

function sayHello() {
    console.log('Hello')
}
//setInterval(sayHello , 1000)

//setTimeout(sayHello,2000)

const interval= setInterval(sayHello , 1000)

const timeout = setTimeout(()=>{
    clearInterval(interval)
    console.log('iptal interval')
},5000)

setTimeout(()=>{
    clearTimeout(timeout)
    console.log('timeout iptal')
},3000)


