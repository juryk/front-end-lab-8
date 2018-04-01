var inputs = process.argv.slice(2);
var result = inputs.map(el => {return el.substring(0,1).toUpperCase()})
                   .reduce((prevVal, curVal) => {return prevVal + curVal});
console.log(result);
