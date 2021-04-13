// Write a function that takes in a BST and a target integer value and returns
// the closest value to that target value contained in the BST

// key points
// return closest value to target value
// if node value === target value, return value

// questions
// will the tree have at least one node?
// can in pass in any other arguments?
// iterative or recursive solution?

//recursive solution
function findClosestValueInBstRec(tree, target, min = tree.value - target) {
	// stop traversing when null value reached
	// return sum of target and difference
	if (!tree)
		return min + target
	if (tree.value === target)
		return tree.value
	// evaluate difference between node value and target value
	// keep track of min difference in a min variable
	if (Math.abs(tree.value - target) < Math.abs(min))
		min = tree.value - target
	// traverse BST, comparing each node value to target value
	// if target < node value, go left
	if (target < tree.value) {
		return findClosestValueInBstRec(tree.left, target, min)
	}
	// if target > node value, go left
	else {
		return findClosestValueInBstRec(tree.right, target, min)
	}
}

// avg time: O(log n) where n = # nodes in BST
// worst time: O(n)
// space: O(log n)

// iterative solution
function findClosestValueInBst(tree, target) {
	// traverse through BST (loop)
	// keep track of min difference
	// make decision at every node: left or right?
	let min = tree.value - target // -2
	let currentNode = tree // 10
	while (currentNode) {
		if (Math.abs(currentNode.value - target) < Math.abs(min))
			min = currentNode.value - target
		if (target < currentNode.value)
			currentNode = currentNode.left
		else if (target > currentNode.value)
			currentNode = currentNode.right
		else
			return currentNode.value
	}
	return min + target
}

// time: avg - O(log n)   worst - O(n) where n = # nodes
// space: O(1)

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// test

// make BST
const ten = new BST(10)
const five = new BST(5)
const fifteen = new BST(15)
const two = new BST(2)
const thirteen = new BST(13)
const twentyTwo = new BST(22)
const one = new BST(1)
const fourteen = new BST(14)

ten.left = five
ten.right = fifteen
five.left = two
two.left = one
fifteen.left = thirteen
fifteen.right = twentyTwo
thirteen.right = fourteen

const target = 8
const answer = 10

const output = findClosestValueInBst(ten, target)
const rec = findClosestValueInBstRec(ten, target)

if (output === answer)
  console.log('PASS')
else
  console.log('FAIL, correct output: ', answer)

console.log('your output: ', output)
console.log('recursive solution output: ', rec)
