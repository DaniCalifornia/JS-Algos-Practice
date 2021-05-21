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
      console.log('if', str[i])
      characters[str[i]] = 2
    } // if not, assign to 1
    else {
      console.log('else', str[i])
      characters[str[i]] = 1
    }
  }
  console.log('characters obj', characters)
  for (let char in characters) {
    if (characters[char] === 1)
      return char
  }
  return '_'
}
