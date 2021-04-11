const array = [-8, -6, 1, 2, 3, 5, 6, 12]
const answer =  [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

const output = arrayThreeSum(array, 0)

if (output.toString() === answer.toString())
  console.log('PASS')
else
  console.log('FAIL, correct output: ', answer)

console.log('your output: ', output)

function arrayThreeSum(arr, sum) {
  // arr.sort() // arr.sort() is not sorting correctly?
  let triplets = []
  let addend, start, end, allUnique

  for (let i = 0; i < arr.length; i++) {
    // for each element, find the addend that would sum to target
    addend = sum - arr[i]
    start = i
    end = arr.length - 1
    // perform twoSum on the rest of the array with addend as new target
    while(start < end) {
      // make sure indeces are different to avoid duplicates
      allUnique = i !== start && i !== end
      // the rest is just standard twoSum
       if (arr[start] + arr[end] === addend && allUnique)
          triplets.push([arr[i], arr[start], arr[end]])
      if (arr[start] + arr[end] < addend)
        start++
       else
        end--
    }
  }
  return triplets
}
