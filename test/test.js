import {assert} from 'chai'
import {findMissingNumberInSortedArray} from "../find-missing-number-in-sorted-array.js";

describe('findMissingNumber', () => {
	it('Should find the missing number in an array of numbers', () => {
		const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20]
		const result = findMissingNumberInSortedArray(arr)
		return assert.equal(result, 14)

	})

})