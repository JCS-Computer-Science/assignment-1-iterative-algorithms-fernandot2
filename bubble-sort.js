function bubbleSort(array) {
	/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */
	let prevArr = [...array];
	for(let i = 1; i <= array.length; i++){
		for(let e = 0; e < array.length-i; e++){
			if(array[e] > array[e+1]){
				array.splice(e, 2, array[e+1], array[e]);
			}
		}
		if(prevArr == array){
			return array;
		}
	}
	return array;
}

module.exports = bubbleSort;
