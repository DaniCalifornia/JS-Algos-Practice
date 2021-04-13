// Given an array arr consisting of N integers, sorted in ascending order
// (least to greatest), and a separate number (a sum), determine if any 2 numbers
// in the array add up to the sum. Return true if any 2 different numbers within
// the array add up to sum. Return false if no 2 numbers in the array add up to sum.

// key points
// - return a boolean


function pairSumPointers(arr, sum) {
  let start = 0
  let end = arr.length - 1
  while(start < end) {
    if (arr[start] + arr[end] === sum)
      return true
    if (arr[start] + arr[end] < sum)
      start++
    else
      end--
  }
  return false
}

// time: O(n) where n = array length
// space: O(1)

function pairSumMap(arr, sum) {
  const targetMap = {}
  for (let i = 0; i < arr.length; i++) {
    const target = sum - arr[i]
    if (targetMap[arr[i]]) {
      return true
    } else {
      targetMap[target] = true
    }
  }
  return false
}

// time: O(n)
// space: O(n)

// test
const array = [1, 1, 2, 3, 4, 5]
const target = 7
const answer = true

const output = pairSumPointers(array, target)
const alt = pairSumMap(array, target)


if (output === answer)
  console.log('PASS')
else
  console.log('FAIL, correct output: ', answer)

console.log('your output: ', output)
console.log('alternative solution: ', alt)

