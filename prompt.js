console.log('prompt.js is loaded');

// apskaiciuoti apskritimo plota.
let r = 10;
let pi = 3.14;
let plotas = pi * (r * r);
let resltSring = ' jei spindulys yra ' +r +' tai apskritimo plotas yra ' + plotas ;
resltSring = ` jei spindulys yra ${r}  tai apskritimo plotas yra ${plotas}` ;
console.log(resltSring);

// r = prompt('koks jusu apskritimo spindulys');
plotas = pi * (r * r);
resltSring = ' jei spindulys yra ' +r +' tai apskritimo plotas yra ' + plotas ;
console.log(resltSring);

//  iskviesti ivedimo dialoga
// prompt('kiek dabar valandu');
// alert('kazkur kazkaip'); // ekstra pranesimas

// confirm(' ar tikrai norite istrinti si pranesima')

/* 
pirma eilute.
antra eilute.
multi line sringas.
*/
let str = '';
str += 'pirma eilute';
str += 'antra eilute';
str += 'multi line sringas';
console.log( `${str}`);

// jei norim paziureti tipa, tai galima su console log.
console.log(typeof str );