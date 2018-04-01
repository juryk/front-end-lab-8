var evenOrOdd = +process.argv[2];
var sum = () => +process.argv[3] + evenOrOdd;
var obj = {};
obj[sum()] = sum();
obj[(evenOrOdd % 2 === 0 ? "even" : "odd")] = evenOrOdd;
console.log(obj);
