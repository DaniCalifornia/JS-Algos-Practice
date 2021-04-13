// Write a function that takes a string and returns true if the string is
// a palindrome and false if not

// key points
// return a boolean

// questions
// case sensitive?
// is a string of length 1 a palindrome?

// isPal('car') => false
// isPal('racecar') => true
// isPal('RaCecAr') => true
// isPal('!? 100 ABCcba 001 ?!') => true

function isPal(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i].toLowerCase() !== str[str.length - i - 1].toLowerCase())
      return false
  }
  return true
}

function isPalRec(str) {
  if (str.length <= 1)
    return true
  if (str[0].toLowerCase() !== str[str.length - 1].toLowerCase())
    return false
  return isPalRec(str.slice(0, str.length - 1).slice(1))
}


// test
const input = '!? 100 ABCcba 001 ?!'
const answer = true

const output = isPal(input)
const rec = isPalRec(input)

if (output === answer)
  console.log('PASS')
else
  console.log('FAIL, correct output: ', answer)

console.log('your output: ', output)
console.log('recursive solution: ', rec)
