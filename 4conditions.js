let result = Number(prompt('2+5 ='))

if (result == 7){
    console.log('true')
}else{console.log('false')}

switch (result) {
    case 7:
        console.log('true')
        break;
    case 10 :
        console.log('messi')
        break;
    default:
        console.log('false')
        break;
}
let score = Number(prompt('please enter your lesson score'))

if (score >= 0 && score < 35) {
    console.log('fucking lazy')
}

if (score >= 35 && score < 70) {
    console.log('fucking normal')
}

if (score >= 70 && score <= 100) {
    console.log('fucking ...')
}