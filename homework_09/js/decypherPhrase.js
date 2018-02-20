let decypherPhrase = (object, string) => {
    let reversedMap = {};
    for (let key in object){
        reversedMap[object[key]] = key;
    }
    return cypherPhrase(reversedMap, string);
}
