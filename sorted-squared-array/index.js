// Write a function that takes in a non-empty array of integers that are
// sorted in ascending order and returns a new array of the same length
// with the squares of the original integers also sorted in ascending order

// key points
// - return a NEW array

// questions
// - will the array contain negative integers?
// - can i use array methods? (sort, map)
// - can i modify the original array? no

function sortedSquaredArray(array) {
	const output = []
	// add negative integers to a new array
	const negs = array.filter(int => int < 0)
	// iterate through original array, and push computed squares onto output array
	// if element is > current neg element, push neg element's square onto output array
	let negsPointer = negs.length - 1
	// start pointer at first postitive integer
	let arrPointer = negs.length
	while(arrPointer < array.length || negsPointer >= 0) {
		// if we've reached the end of positive ints, push the remaining negs
		if (arrPointer === array.length || array[arrPointer] >= negs[negsPointer] * -1) {
			output.push(negs[negsPointer] * negs[negsPointer])
			negsPointer--
		}
		else {
			output.push(array[arrPointer] * array[arrPointer])
			arrPointer++
		}
	}

	return output
	// alternative O(n log n) solution
  // return array.map(int => int*int).sort((a, b) => a - b)
}

// time complexity: O(n)
// space complexity: O(n)

// test
const array = [-4, 1, 2, 3, 5, 6, 8, 9]
const answer = [1, 4, 9, 16, 25, 36, 64, 81]

const output = sortedSquaredArray(array)

if (output.toString() === answer.toString())
  console.log('PASS')
else
  console.log('FAIL, correct output: ', answer)

console.log('your output: ', output)
