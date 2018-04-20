import display from './output-module.js';

function getSum(a, b) {
    return Math.round((a + b) * 100) / 100;
}
function getDiff(a, b) {
    return Math.round((a - b) * 100) / 100;
}
function getMult(a, b) {
    return Math.round(a * b * 100) / 100;
}
function getDiv(a, b) {
    return Math.round(a / b * 100) / 100;
}

export default function(a, b, operation) {
    let result;
    switch (operation) {
        case "plus":
        result = getSum(a, b);
        break;
        case "minus":
        result = getDiff(a, b);
        break;
        case "multiply":
        result = getMult(a, b);
        break;
        case "divide":
        result = getDiv(a, b);
        break;
        default:
        result = "Something went wrong";
    }
    display(result);
}
