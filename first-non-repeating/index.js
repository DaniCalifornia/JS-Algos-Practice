//Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'..

// key points
// input: string
// output: character (_)

// questions
// not case sensitive
// empty string => _

// example
// 'aaaabccc' => 'b'

// 'aaabccccdeee' => 'b'

// 'eaaabcdccbdf' => 'e'

// 'aaabcdccbd' => '_'


// {e: false, a: true, b: true, c: true, d: true, f: false}

function firstNonRepeating(str) {
  // object to keep track of new character occurences
  const characters = {}
  // iterate through str and add new occurrences to array
  for (let i = 0; i < str.length; i++) {
    // if str[i] in object, set to 2
    if (characters[str[i]]) {
      characters[str[i]] = 2
    }
    // if not, assign to 1
    else {
      characters[str[i]] = 1
    }
  }
  for (let char in characters) {
    if (characters[char] === 1)
      return char
  }
  return '_'
}

const input = 'aaabccccdeee'
const answer = 'b'

const output = firstNonRepeating(input)

if (answer === output)
  console.log('PASS')
else
  console.log('FAIL, correct answer: ', answer)

console.log('your output: ', output)
