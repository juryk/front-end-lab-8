let euros = +prompt('EUROS:', '');
let dollars = +prompt('DOLLARS:', '');

let kursEuro = 33.2324;
let kursDolara = 27.1240;

let euroUAH =  euros*kursEuro;
let dollarUAH =  dollars*kursDolara;
let euroDollar = kursEuro/kursDolara;

console.log( euros + " euros are equal " + euroUAH.toFixed(2) + " UAH, " + dollars + " dollars are equal " + dollarUAH.toFixed(2) + " UAH, one euro is equal " + euroDollar.toFixed(2) + " dollars.")
