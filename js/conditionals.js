'use strict';
console.log('conditionals');
/*
  if(salyga){
    vykdoma jei true
  } else {
    vykdoma jei false
  }
 
 */


let isUserAdmin = false;
if(isUserAdmin === true) {
    console.log('useris yra adminas');
} else {
    console.log('useris nera adminas');
}

//  sukurti kintamaji su amzium ir tikrinam ar suauges ar ne 
let amzius = Number(prompt('Iveskite zmogaus amziu')) ;
// if(amzius < 18){
//     console.log('zmogus yra vaikas');
// } else{
//     console.log('zmogus yra suauges');
// }
if (amzius < 0 || amzius >150 ){
console.log ('Blogai ivedete amziu', amzius);
} else if (amzius > 0 && amzius < 18) {
    console.log('zmogus yra vaikas', amzius);
} else if (amzius <= 70) {
    console.log('zmogus yra suauges', amzius);
} else if (amzius > 70) {
    console.log('zmogus yra senjoras', amzius);
} else {
    console.log('Blogai ivedete amziu', amzius);
}