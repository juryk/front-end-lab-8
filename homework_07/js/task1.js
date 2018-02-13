let number = +prompt("Enter natural number N (0<N<=20)", "");

try {
    if (isNaN(number)){
        throw new Error("Incorrect!");
    }
    if (number <= 0 || number > 20){
        throw new Error("Incorrect!");
    }
    if (number % 1 !== 0) {
        throw new Error("Incorrect!");
    }
} catch(err) {
    if(err){
        console.log(err);
        throw "stop";
    }
}

let copyNumber = number;
let outputString = "";
for(var i = 0; i < number; i++){

    for(var k = 0; k < copyNumber - 1; k++) {
        outputString += "   ";
    }
    copyNumber--;
    for(var j = 0; j < i * 2 + 1; j++){
        outputString += "[~]";
    }
    outputString += '\n';
}
console.log(outputString);
