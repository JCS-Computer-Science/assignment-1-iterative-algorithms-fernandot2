function insertionSort(array) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */
	let prevArr = [...array];
	for(let i = 1; i <= array.length; i++){
		let difference = 0;
		while(array[i] < array[i-(1+difference)]){
			difference++;
		};
		if(difference){
			array.splice(i-difference, 0, array[i]);
			array.splice(i+1, 1);
		};
		if(prevArr == array){
			return array;
		}
	}
	return array;
}

module.exports = insertionSort;
