const max = +process.argv[2];
let FizzBuzz = function*() {
    let it = 0;
    let value;
    while(it != max) {
        it++;
        if (it % 3 === 0 && it % 5 !== 0)
            yield 'Fizz';
        else if (it % 5 === 0 && it % 3 !== 0)
            yield 'Buzz';
        else if (it % 5 === 0 && it % 3 === 0)
            yield 'FizzBuzz';
        else yield it;
    }
}();
for (var n of FizzBuzz) {
     console.log(n);
}
