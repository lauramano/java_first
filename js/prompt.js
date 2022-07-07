console.log('./js/prompt.js is loaded');

// apskaiciuoti apskritimo plota.
let r = 10;
let pi = 3.14;
let plotas = pi * (r * r);
let resltSring = ' jei spindulys yra ' +r +' tai apskritimo plotas yra ' + plotas ;
resltSring = ` jei spindulys yra ${r}  tai apskritimo plotas yra ${plotas}` ;
console.log(resltSring);
// Prompt tai funkcija kuri iskviecia papildoma langeli, kuris paima pradinius duomenis

// r = prompt('koks jusu apskritimo spindulys');
plotas = pi * (r * r);
resltSring = ' jei spindulys yra ' +r +' tai apskritimo plotas yra ' + plotas ;
console.log(resltSring);

//  iskviesti ivedimo dialoga
// let valanda = prompt('kiek dabar valandu');
// let resultString = ` dabar yra ${valanda} valandu`;
// console.log(resultString);


// alert('kazkur kazkaip'); // ekstra pranesimas vartotojams

// confirm(' ar tikrai norite istrinti si pranesima'); // ekstra pstvirtinimas

/* 
pirma eilute.
antra eilute.
multi line sringas.
*/
let str = '';
str += ' pirma eilute. ';
str +=  ' antra eilute. ';
str += ' multi line sringas. ';
// console.log( `${str}`);


str = `
pirma eilute.
antra eilute.
multi line sringas.
`;
console.log(str);

