let userName = 'James';
let age = 22;
let town = 'Finland';
// Studentas James yra 22 metu ir jis gyvena finland.
// let sentence =('Studentas  ' + userName + ' yra ' + age + ' metu ir jis gyvena ' + town + '.'); 

let sentence = `Studentas ${userName} yra ${age} metu ir jis gyvena ${town}.`
console.log(sentence);

// Kiek bus Jams metu po 5 metu?
// su bektikais galima atlikineti veiksmus.

let po5Metu = `${userName} bus ${age + 5 } po 5 metu.`;
console.log(po5Metu);


let metaiplius = prompt('metu pokytis');
console.log(typeof metaiplius);
let metaipliusNumber = Number(metaiplius);
let poNnMetu = `${userName} bus ${age + metaipliusNumber} po ${metaiplius} metu`;
console.log(`metaiplius duomenu tipas yra ${typeof metaiplius}`);
console.log(poNnMetu);
// jei norim paziureti tipa, tai galima su console log.
// console.log(typeof str );