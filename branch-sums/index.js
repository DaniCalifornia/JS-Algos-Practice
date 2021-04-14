// Write a function that takes in a Binary Tree and returns a list of its
// branch sums ordered from left to right

// key points
// - return a list of branch sums (left to right)
// - binary tree: each node will have at most 2 child nodes

// questions
// - will all node values be integers? yes
// - if the root node is null, return 0? yes
// - can i add to the args? yes

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root, currSum=0, sums=[]) {
	// DFS
	currSum += root.value
	if (!root.left && !root.right) {
		sums.push(currSum)
		return sums
	}
	if (root.left)
		branchSums(root.left, currSum, sums)
	if (root.right)
		branchSums(root.right, currSum, sums)
	return sums
}

// time: O(n) where n = # nodes
// space: O(n)

// test

// make BinaryTree
const one = new BinaryTree(1)
const two = new BinaryTree(2)
const three = new BinaryTree(3)
const four = new BinaryTree(4)
const five = new BinaryTree(5)
const six = new BinaryTree(6)
const seven = new BinaryTree(7)
const eight = new BinaryTree(8)
const nine = new BinaryTree(9)
const ten = new BinaryTree(10)

one.left = two
one.right = three
two.left = four
two.right = five
three.left = six
three.right = seven
four.left = eight
four.right = nine
five.left = ten

const input = one
const answer = [15, 16, 18, 10, 11]

const output = branchSums(input)

if (output.toString() === answer.toString())
  console.log('PASS')
else
  console.log('FAIL, correct output: ', answer)

console.log('your output: ', output)
