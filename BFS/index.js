// Write a function that takes a node of the tree and a callback.
// The function will iterate through the child nodes,
// calling the callback function on each of them.

// key points
// binary tree not BST
// no return value
// bfs goes through tree level by level

function node(value) {
  return {
    value,
    children: [],
  };
}

function bfs(startingNode, callback) {
  // start with just root node
  let queue = [startingNode]
  // while queue is not empty
  while (queue.length) {
    // add children of the first node in queue
    queue[0].children.forEach(child => {
      queue.push(child)
    });
    // call callback function on first node in queue
    callback(queue[0].value)
    // remove first node from queue
    queue.shift()
  }
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

bfs(a, printNode)
