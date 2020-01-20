

// Area


let a = 2.4,
    b = 3.3,
    aResult = a * b;
let areaResult = parseFloat(aResult.toFixed(1));
console.log(areaResult, typeof areaResult)





//  name, age, jear


let age = 25,
    thisYear = 2020,
    name = 'Polina';
let yearOfBirth = thisYear - age;
console.log(`My name is ${name}. I was born in ${yearOfBirth}  and I'm ${age} years old`)




// Circle square

// option1________________________________________________

let radius = parseFloat("5.67cm"),
    result = Math.round(Math.PI * (Math.pow(radius, 2)));
console.log(`Circle square is ${result}`)


//option2_________________________________________________
let radius2 = parseFloat("5.67cm");
let resultRadius = Math.pow(radius, 2);
let resultPiRadius = Math.PI * resultRadius;
let result2 = Math.round(resultPiRadius);
console.log(`Circle square is ${result2}`)   