// Write a function that takes a node of the tree and a callback.
// The function will iterate through the child nodes,
// calling the callback function on each of them.

// key points
// - binary tree not BST
// - no return value
// - dfs preorder goes through root first then children left to right

function node(value) {
  return {
    value,
    children: [],
  };
}

function preOrderDFS(startingNode, callback) {
  // call callback function on startingNode
  callback(startingNode.value)
  // recursively call DFS on each child node, left to right
  startingNode.children.forEach(child => {
    preOrderDFS(child, callback)
  });
}

function postOrderDFS(startingNode, callback) {
  // recursively call DFS on each child node, left to right
  startingNode.children.forEach(child => {
    postOrderDFS(child, callback)
  });
  // call callback function on startingNode
  callback(startingNode.value)
}

var a = node('a');
var b = node('b');
var c = node('c');
var d = node('d');
var e = node('e');
var f = node('f');
var g = node('g');
var h = node('h');
var i = node('i');
var j = node('j');
var k = node('k');
var l = node('l');
var m = node('m');

a.children.push(b, c, d);
b.children.push(e);
e.children.push(k, l);
c.children.push(f, g, h);
h.children.push(m);
d.children.push(i, j);

function printNode(val) {
  console.log(val)
}
console.log('pre order')
preOrderDFS(a, printNode)
console.log('post order')
postOrderDFS(a, printNode)

// time complexity: O(n)
