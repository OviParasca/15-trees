'use strict';

const BinaryTree = require('./lib/binarytree.js');
const Node = require('./lib/node.js');

// create a new Binary Tree
const one = new Node(1);
const two = new Node(3);
const three = new Node(5);
const four = new Node(9);
const five = new Node(10);
const six = new Node(12);
const seven = new Node(15);
const eight = new Node(20);
const nine = new Node(30);

const tree = new BinaryTree(one);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;

console.log(tree);
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder());