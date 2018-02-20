let collectIds = (array) => {
    let filteredArray = getFilteredArray(array, (el) => {
		return el.rating > 3.0
	});
	return getTransformedArray(filteredArray, (el) => {
	    return el.id
	});
}
