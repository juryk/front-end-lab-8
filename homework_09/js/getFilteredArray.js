let getFilteredArray = (array, callback) => {
    let filteredArray = [];
    forEach(array, (elem) => {
        callback(elem) ? filteredArray.push(elem) : null });
    return filteredArray;
}
