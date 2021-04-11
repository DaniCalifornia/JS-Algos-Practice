// Given two non-empty arrays of integers, write a function that determines
// whether the second array is a subsequence of the first one

// key points
// - order matters

// questions:
// - will the array always be longer than the sequence?
// - how should I handle duplicate integers?
// - can I use array methods? (sort, includes, etc)

function isValidSubsequence(array, sequence) {
  // if the sequence is is longer than the array, return false
	if (sequence.length > array.length)
		return false
	// loop through array and increment sequence pointer if element matches
	let seqPointer = 0
	for (let i = 0; i <= array.length; i++) {
		if (seqPointer === sequence.length)
			return true
		if (sequence[seqPointer] === array[i])
			seqPointer++
	}
	return false
}

// time complexity: O(n) where n = array length
// space complexity: O(1)

// test
const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [1, 6, -1, 10]
const answer = true

const output = isValidSubsequence(array, sequence)

if (output === answer)
  console.log('PASS')
else
  console.log('FAIL, correct output: ', answer)

console.log('your output: ', output)
