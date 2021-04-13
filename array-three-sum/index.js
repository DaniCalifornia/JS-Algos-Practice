// Given an array of distinct integers and an integer representing a target
// sum, write a function that returns an array of all triplets in the input
// array that sum to the target sum.

// key points
// - return a nested array of triplets

// questions
// - will the array be sorted?
// - will the array always have at least 3 elements?

function arrayThreeSum2(arr, sum) {
  arr.sort((a, b) => a - b)
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

function arrayThreeSum(arr, targetSum){
  const solution = []
  for(let i = 0; i< arr.length-1; i++){
    //the sum needed given we already know one element arr[i]
    let currentSum = targetSum - arr[i]
    //create a hash table to store all of the integers from arr[i] we have tried
    let memo ={}
    for (let j = i+1; j < arr.length; j++){
      if(memo[currentSum-arr[j]]){
        solution.push([arr[i], currentSum-arr[j], arr[j]])
      }else{
        memo[arr[j]] = true
      }
    }
  }
  return solution
}

// time: O(n^2) where n = array length
// space: O(n)

const array = [-8, -6, 1, 2, 3, 5, 6, 12]
const answer =  [[-8, 3, 5], [-8, 2, 6], [-6, 1, 5]]

const output = arrayThreeSum(array, 0)
const alt = arrayThreeSum2(array, 0)

if (output.toString() === answer.toString())
  console.log('PASS')
else
  console.log('FAIL, correct output: ', answer)

console.log('your output: ', output)
console.log('alternative solution: ', alt)

