'use strict';

/* 
Parasyti programa kuri tikrintu
1 Paprasyti ivesti varda ir slaptazodi
2 jei vadras 'admin' slaptazodis turi buti 'master'
jei vardas ne admin tai slaptazodis yra: vardas ir skaicius 11
ismeta sveiki admin arba Neteisingas slaptazodis
jei nieko nera 'Viso gero'
*/
let vardas = prompt('Iveskite prisijungimo varda:');
console.log(vardas); 
let vardasPlius = vardas + '11';
let slaptazodis = prompt('iveskite slaptazodi');
if (vardas === 'admin' && slaptazodis === 'master') {
    console.log('Sveiki admin');
    alert('sveiki admin');
} else if (vardas = vardas && slaptazodis === vardasPlius) {
 alert('Labas', vardas);
 console.log('Labas vartotojau', vardas)
} else {
    console.log('Viso gero')
}