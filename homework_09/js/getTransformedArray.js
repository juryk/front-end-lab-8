let getTransformedArray = (array, callback) => {
    let transformedArray = [];
    forEach(array, elem => transformedArray.push(callback(elem)) );
    return transformedArray;
}
