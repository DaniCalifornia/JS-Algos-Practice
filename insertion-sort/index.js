// Use insertion sort to sort an array

// key points
// input: array
// output: sorted array

// example
// [2, 4, 1, 5, 3]
// [2, 4, 1, 5, 3]
// [2, 1, 4, 5, 3]
// [1, 2, 4, 5, 3]
// [1, 2, 3, 4, 5]

function insertionSort(array) {
  // first element is sorted portion
	// iterate through remaining nums
	// insert num where it belongs
	for (let i = 1; i < array.length; i++) {
		let j = i - 1
		const currNum = array[i]
		while(j > -1 && array[j] >= currNum) {
			// swap currNum with element before it
			array[j + 1] = array[j]
			array[j] = currNum
			j--
		}
	}
	return array
}

// time complexity: O(n^2) worst case
// space complexity: O(1)

const input = [2, 4, 1, 5, 3]
const answer = [1, 2, 3, 4, 5]

const output = insertionSort(input)

if (output.toString() === answer.toString())
  console.log('PASS')
else
  console.log('FAIL, correct output: ', answer)

console.log('your output: ', output)
