function selectionSort(array) {
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */
	let prevArr = [...array];
	for(let i = 0; i < array.length-1; i++){
		let index = i
		for(let e = i; e < array.length; e++){
			if(array[e] < array[index]){
				index = e;
			}
		};
		array.splice(i, 0, array[index]);
		array.splice(index+1, 1);
		if(prevArr == array){
			return array;
		}
	}
	return array;
}

module.exports = selectionSort;
