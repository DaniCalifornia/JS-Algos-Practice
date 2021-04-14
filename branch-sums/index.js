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

