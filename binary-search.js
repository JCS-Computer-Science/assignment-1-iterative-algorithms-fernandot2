function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	let filter = 0.5;
	let filterExponent = 2;
	let previousTerm;
	while(true){
		let search = Math.floor(array.length*filter);
		if(array[search] == searchTerm){
			return search; 
		}else{
			filter = (array[search] > searchTerm ? filter -= Math.pow(0.5, filterExponent) : filter += Math.pow(0.5, filterExponent));
			if(previousTerm == search){
				return null;
			}
			previousTerm = search;
		}
		filterExponent++;
	}
}
module.exports = binarySearch;
