function getMin(){
    let it = 1;
    let min = arguments[0];
    while(arguments[it] !== undefined){
        if(arguments[it] < min){
            min = arguments[it];
        }
        it++
    }
    return min;
}
