function insertionSort(array) {
	for(let i = 1; i <= array.length; i++){
        if(array[i] < array[i-1]){
            let searchValue = array[i];
            let insertIndex = binarySearch((array.slice(0, i)), searchValue);
            array.splice(insertIndex, 0, array[i])
            array.splice(i+1, 1);
        }
	}
	return array;
}
function binarySearch(subArray, searchValue) {
	let filter = 0.5;
	let filterExponent = 2;
    let searchQuantity = Math.floor(Math.log(subArray.length)/Math.log(2)) + 1;
    let upperLimit, lowerLimit;
    let search;
    for(let i = 0; i < searchQuantity; i++){
        search = Math.floor(subArray.length*filter);
        if(subArray[search] == searchValue){
            return search;
        }
        if(subArray[search] > searchValue){
            upperLimit = search;
            filter -= Math.pow(0.5, filterExponent)
        }else{
            lowerLimit = search;
            filter += Math.pow(0.5, filterExponent)
        }
        if(Math.abs(upperLimit - lowerLimit) == 1){
            return upperLimit;
        }
        filterExponent++;
    }
    return search;
}

module.exports = insertionSort;