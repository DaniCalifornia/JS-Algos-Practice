// Write a function that takes in two non-empty arrays of integers, finds the
// pair of numbers (one from each array) whose absolute difference is closest
// to zero, and returns an array containing these two numbers, with the number
// from the first array in the first position

// key points
// - return ARRAY of points

// questions
// - will there be duplicates in either array?

function smallestDifference(arrayOne, arrayTwo) {
	// iterate through arrayTwo for each element of arrayOne
	// if the absolute difference < min, set new min
	let min = arrayOne[0] > arrayTwo[0] ? arrayOne[0] - arrayTwo[0] : arrayTwo[0] - arrayOne[0]
	let output = [0, 0]
	for (let i = 0; i < arrayOne.length; i++) {
		for (let j = 0; j < arrayTwo.length; j++) {
			const absDif = arrayOne[i] > arrayTwo[j] ? arrayOne[i] - arrayTwo[j] : arrayTwo[j] - arrayOne[i]
			if (absDif === 0)
				return [arrayOne[i], arrayTwo[j]]
			if (absDif < min) {
				min = absDif
				output[0] = arrayOne[i]
				output[1] = arrayTwo[j]
			}
		}
	}
	return output
}

// time: O(m*n)
// space: O(1)

// test
const arrayOne = [-1, 5, 10, 20, 28, 3]
const arrayTwo = [26, 134, 135, 15, 17]
const answer = [28, 26]

const output = smallestDifference(arrayOne, arrayTwo)

if (output.toString() === answer.toString())
  console.log('PASS')
else
  console.log('FAIL, correct output: ', answer)

console.log('your output: ', output)
