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
  
  