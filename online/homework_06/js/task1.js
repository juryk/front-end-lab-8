let sides = [];
let incorrect = false;
let square, type, p = 0;
sides.push(+prompt('Length of the first side:', ''));
sides.push(+prompt('Length of the second side:', ''));
sides.push(+prompt('Length of the third side:', ''));

sides.forEach( item => {
    if(item <= 0){
        incorrect = true;
    }
    if (isNaN(item)) {
        incorrect = true;
    }
});

if( sides[0] + sides[1] > sides[2] && sides[2] + sides[1] > sides[0] && sides[0] + sides[2] > sides[1] ){
    incorrect = false;
} else {
    incorrect = true;
}

if (incorrect) {
    console.log("Incorrect data!");
}
else {

    sides.sort(function(a, b) {
        return a - b;
    });

    let powedSides = sides.map( x => {
        return Math.pow(x, 2);
    })
    let powedSidesSum = powedSides[0] + powedSides[1];

    if ( sides[0] !== sides[1] && sides[1] !== sides[2] && sides[0] !== sides[2] ){
        type = "scalene";
    } else if( sides[0] === sides[1] && sides[1] === sides[2] ) {
        type = "equilateral";
    } else if ( sides[0] === sides[1] || sides[1] === sides[2]) {
        type = "isosceles";
    }
    if (powedSides[2] === powedSidesSum ) {
        type = 'right';
    }

    p = sides.reduce( (sum, current) => {
        return sum + current;
    }, 0);
    p = p/2;
    square = Math.sqrt( p * (p - sides[0]) * (p - sides[1]) * (p - sides[2]));

    if (square % 1 !== 0) {
        square = square.toFixed(2);
    }

    console.log ("Type of triangle is " + type + " triangle and square is " + square);

}
