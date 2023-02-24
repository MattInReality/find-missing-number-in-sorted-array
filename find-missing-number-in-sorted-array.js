/*

* We could improve this function by taking in an extra parameter telling it what number we are starting from.
* */
export function findMissingNumberInSortedArray(arr) {
	// Quick returns on extremes
	if(arr[0] !== 1) {
		return
	}
	if(arr[arr.length - 1] !== arr.length + 1) {
		return arr.length + 1
	}
	// Looping the array checking each element against the next to ensure it's only +1.
	// O(n)
	// let current = firstNum
	// for (let i = 0; i < arr.length; i++) {
	// 	if(arr[i] === current) {
	// 		current = arr[i] + 1
	// 	} else {
	// 		return current
	// 	}
	// }
	// O(Log n)
	// A binary search
	let start = 0
	let end = arr.length - 1
	while (start <= end) {
		let mid = Math.floor(((start + end)) / 2)
		if((arr[mid] - mid) === 1 && (arr[mid +1]) - (  mid +1) === 2) {
			return arr[mid] + 1
		}
		if((arr[mid] - mid) === 1) {
			start = mid + 1
		} else {
			end = mid - 1
		}
	}
	return -1
}