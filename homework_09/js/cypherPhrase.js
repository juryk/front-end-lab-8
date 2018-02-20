let cypherPhrase = (object, string) => {
    string = string.split('');
    return getTransformedArray(string, el => object[el] || el).join('');
}
