// given an array of values, out put all the prime numbers that contain 2nd number of my birthday

// key points
// input: array and birthday string
// - return array of values

// questions
// - will all array elements be integers? yes
// - will all array elements be positive? yes
// - is 1 prime?
// - if nothing matches, return empty array? yes
// will birthday always have at least length 2?
// can i use array methods?

function isPrime(num) {
  // iterate from 0 to num / 2
  for (let i = 2; i < num / 2; i++) {
      // if num is divisible by any i, return false
      if (num % i === 0)
        return false
  }
  return true
}

function containsBirthday(birthday, num) {
  // get 2nd digit from birthday
  const target = birthday[1]
  // split num into array of digits
  const numDigits = ('' + num).split('')
  // check if 2nd digit is in digits array
  return numDigits.includes(target)
}

function isPrimeContainsBirthday(vals, birthday) {
  const output = []
  // iterate through vals array
  for (let i = 0; i < vals.length; i++) {
    // check if value is prime
    // check if prime value contains second birthday digit
    if (isPrime(vals[i]) && containsBirthday(birthday, vals[i])) {
        // add match to output array
        output.push(vals[i])
    }
  }
  return output
}

// test isPrime
// console.log('isPrime: ', isPrime(2))

// test containsBirthday
// console.log('containsBirthday: ', containsBirthday('0829', 2))

// test
const valsInput = [3, 10, 13, 23, 30, 31, 37, 133]
const birthdayInput = '0329'

const output = isPrimeContainsBirthday(valsInput, birthdayInput)
const answer = [3, 13, 23, 31, 37]

if (output.toString() === answer.toString())
  console.log('PASS')
else
  console.log('FAIL, correct output: ', answer)

console.log('your output: ', output)
