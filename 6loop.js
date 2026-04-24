let line = "";

for (let i = 0; i < 7; i++) {
  line += "#";
  console.log(line);
}

let cr = 0;

for (let i = 0; i <= 10; i++) {
  
      console.log(cr ,'x',cr ,'=', cr * cr);
    cr += 1;
}

const countries = [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
];

const result = countries
    .map(country => country[0])
    .filter(name => name.toLowerCase().includes('land'));

if(result.length > 0){
    console.log(result);
}else{console.log('All these countries are without land')}


const countriestwo = ['Albania', 'Bolivia', 'Canada', 'Denmark'];

const sortedCountries = countriestwo.slice().sort();

console.log(sortedCountries);