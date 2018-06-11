'use strict';

const BinaryTree = require('../../lib/binarytree.js');
const Node = require('../../lib/node.js');


describe('Tests for the Binary Tree', () => {

  // create a new Binary Tree
  const one = new Node(1);
  const two = new Node(3);
  const three = new Node(6);
  const four = new Node(9);
  const five = new Node(10);
  const six = new Node(13);
  const seven = new Node(15);
  const eight = new Node(21);
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



  it('Test the Post Order of the tree', () => {
    let postOrder = [21, 30, 15, 13, 3, 9, 10, 6, 1];
    let treePostOrder = tree.postOrder();
    for (var i = 0; i < postOrder; i++) {
      expect(treePostOrder).toBe(postOrder[i]);
    }
  });

  it('Test the Pre Order of the tree', () => {
    let preOrder = [1, 3, 13, 15, 21, 30, 6, 9, 10];
    let treePreOrder = tree.preOrder();
    for (var i = 0; i < preOrder; i++) {
      expect(treePreOrder).toBe(preOrder[i]);
    }
  });

  it('Test the In Order of the tree', () => {
    let inOrder = [13, 21, 15, 30, 3, 1, 9, 6, 10];
    let treeInOrder = tree.inOrder();
    for (var i = 0; i < inOrder; i++) {
      expect(treeInOrder).toBe(inOrder[i]);
    }
  });

});
