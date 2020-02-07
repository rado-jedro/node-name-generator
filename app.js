const fs = require('fs');

const genders =['F','M'];
console.log(genders);

const maleNames = [
    'Keneth',
    'Galen',
    'Manuel',
    'Sam',
    'Raymon',
    'Kent',
    'Leon',
    'Rich',
    'Lucius',
    'Walton',
    'Neville',
    'Wilson',
    'Bob',
    'Emory',
    'Joseph',
    'Kenneth',
    'Sanford',
    'Alvin',
    'Arron',
    'Reuben',
    'Erasmo',
    'Frederic',
    'Miles',
    'Florencio',
    'Alphonso',
    'Archie',
    'Gino',
    'Lamar',
    'Newton',
    'Orville',    
];
console.log('maleNames:', maleNames); 

const femaleNames = [
    'Sharice',
    'Malena',
    'Jeana',
    'Bernarda',
    'Marvel',
    'Arletta',
    'Dorene',
    'Clarisa',
    'Rochelle',
    'Micha',
    'Genoveva',
    'Valerie',
    'Minna',
    'Cheryl',
    'Aileen',
    'Fanny',
    'Kandy',
    'Jesusita',
    'Sherise',
    'Jade',
    'Zula',
    'Riva',
    'Bobette',
    'Carlee',
    'Delphia',
    'Annika',
    'Cherelle',
    'Tanna',
    'Chassidy',
    'Natashia',
];
console.log('femaleNames:', femaleNames); 


const lastNames = [
    'Smith',
    'Johnson',
    'Williams',
    'Jones',
    'Brown',
    'Davis',
    'Miller',
    'Wilson',
    'Moore',
    'Taylor',
    'Anderson',
    'Thomas',
    'Jackson',
    'White',
    'Harris',
    'Martin',
    'Thompson',
    'Garcia',
    'Martinez',
    'Robinson',
    'Clark',
    'Rodriguez',
    'Lewis',
    'Lee',
    'Walker',
];
console.log('lastNames:', lastNames); 

const randChoice = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}
  
const people = [];
  
for (let i=0; i<20; i++) {
    const gender = randChoice(genders);

    let firstName;
    if(gender === 'M') {
        firstName = randChoice(maleNames);
    } else {
      firstName = randChoice(femaleNames);
    }
    
    const age = randomAge(18,78);
    console.log(age);

    function randomAge(min, max) { // min and max age 
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

    const randomPerson = { gender, firstName, lastName, age };
    people.push(randomPerson);
}
