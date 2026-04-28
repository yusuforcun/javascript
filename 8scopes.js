window.name = 'Tayfun'

let name = 's'
let surname ='sa'

function letsLearnScope(){
    console.log(name,surname)
    if(true){
        let name = 'Gok'
        let surname = 'Kan'
        console.log(name,surname)
    }
    console.log(name,surname)
}
letsLearnScope()
console.log(name,surname)

const person = {
    name:'mal',
    surname:'bir',
    gender:'female',
    isMarried:'no',
    skills:['html',
        'js',
        'css'],
        getFUllName : function() {
            return `${this.name} ${this.surname}`
        }
        
    
}

console.log(person.gender)
console.log(person.getFUllName())