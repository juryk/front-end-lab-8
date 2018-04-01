const max = +process.argv[2];
let FizzBuzz = {
    [Symbol.iterator]() {
        let it = 0;
        return {
            next() {
                it++;
                if(it <= max) {
                    if (it % 3 === 0 && it % 5 !== 0)
                        return { done: false, value: 'Fizz'};
                    else if (it % 5 === 0 && it % 3 !== 0)
                        return { done: false, value: 'Buzz'};
                    else if (it % 5 === 0 && it % 3 === 0)
                        return { done: false, value: 'FizzBuzz'};
                    else return { done: false, value: it};
                 }
                 return { done: true };
             }
         }
     }
   }
   for (var n of FizzBuzz) {
         console.log(n);
     }
