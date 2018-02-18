function getClosestToZero(){
    let it = 1;
    let min = arguments[0];
    while(arguments[it] !== undefined){
        if(Math.abs(arguments[it]) < min){
            min = arguments[it];
        }
        it++
    }
    return min;
}
