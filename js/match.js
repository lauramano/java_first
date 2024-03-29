//  matematiniai skaiciavimai
console.log(Math.PI );
console.log(Math.sqrt(25) );
let num1 = 11.2584;


/*
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E */



let skaiciusE = Math.E
console.log( 'skaicius E :', skaiciusE);
// istraukiam sakny
console.log('istraukiam sakny su Math.sqrt(9) lygu:', Math.sqrt(9));


/*
Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6)

*/
// apvalinam 
let round = Math.round(num1);
console.log( ` Apvalinam sk: ${num1} su funkcija Math.round ir gauname: ${round}.`);

 let ceil = Math.ceil(num1);
 console.log( ` Apvalinam sk: ${num1} su funkcija Math.ceil ir gauname: ${ceil}.`);
//  funkcija floor numeta viska kas po kablelio, net jei virs 5
 let flour = Math.floor(num1);
 console.log( ` Apvalinam sk: ${num1} su funkcija Math.floor ir gauname: ${flour}.`);

 let truncNums = Math.trunc(num1);
 console.log( ` Apvalinam sk: ${num1} su funkcija Math.trunc ir gauname: ${truncNums }.`);
//  kelti laipsniu

console.log(2 ** 3);
console.log('Math.pow(2,3) ', Math.pow(2,3));

//  minimalios reiksmes radimas
let skMin = Math.min(-10, 0, 15, -15, 25);
console.log('Math.min(-10, 0, 15, -15, 25)', skMin);

let skMax = Math.max(-10, 0, 15, -15, 25);
console.log('Math.max(-10, 0, 15, -15, 25)', skMax);

console.log('skaicius Math.random sugeneruoja skaiciu nuo 0 iki 1 (1 niekada nebus', Math.random());
console.log('skaicius Math.random sugeneruoja skaiciu nuo 0 iki 1 (1 niekada nebus', Math.random());
console.log('skaicius Math.random sugeneruoja skaiciu nuo 0 iki 1 (1 niekada nebus', Math.random());
console.log('skaicius Math.random sugeneruoja skaiciu nuo 0 iki 1 (1 niekada nebus', Math.random());

// skaicius nuo 1 iki 10 
let skIkiDesimt = Math.floor(Math.random()*10) + 1;
console.log('skaicius nuo 1 iki 10:', skIkiDesimt);


// Apvalina
let kaina = 14.5871;
let apvalinKaina = kaina.toFixed(2);
console.log(` kaina: ${kaina} su funkcija kaina.toFixed suapvalina ${apvalinKaina}`);

let presicionKaina = kaina.toPrecision(5);
console.log(` kaina: ${kaina} su funkcija kaina.toPrecision(5) atiduoda tiek skaitmenu kiek skliausteliuose ${presicionKaina}`);