// Given a sorted array nums, remove the duplicates in-place such that each
// element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by
// modifying the input array in-place with O(1) extra memory.

// key points
// - input: SORTED array
// - output: new length

// questions
// - can i use array methods?

function removeDuplicates(nums) {
  if (!nums.length)
    return 0
  // keep track of unique elements in array
  let uniqueNum = nums[0]
  // iterate through array
  for (let i = 1; i < nums.length; i++) { // 2
  // if element === last unique element, remove element
  if (nums[i] === uniqueNum) {
    nums.splice(i, 1)
    i--
  }
  // else, element is now unique element
  else
    uniqueNum = nums[i] // 2
  }
  console.log('nums', nums)
  return nums.length
}

// // test
const input = [1, 2, 2, 2, 3, 4, 5, 5, 5, 5]
const output = removeDuplicates(input)
const answer = 5 // [1, 2, 3, 4, 5]

if (output === answer)
  console.log('PASS')
else
  console.log('FAIL, correct output: ', answer)

console.log('your output: ', output)

