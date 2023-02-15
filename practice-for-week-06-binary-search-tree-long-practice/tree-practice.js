const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  if (!rootNode)
  return 100000
  return Math.min(rootNode.val,findMinBST(rootNode.left))
}

function findMaxBST (rootNode) {
  if (!rootNode)
  return -100000
  return Math.max(rootNode.val,findMaxBST(rootNode.right))
}

function findMinBT (rootNode) {
  if (!rootNode)
  return 100000
  return Math.min(rootNode.val,findMinBT(rootNode.left),findMinBT(rootNode.right))
}

function findMaxBT (rootNode) {
  if (!rootNode)
  return -100000
  return Math.max(rootNode.val,findMaxBT(rootNode.right),findMaxBT(rootNode.left))
}

function getHeight (rootNode) {
  if(!rootNode)
  return -1
  
  return 1+Math.max(getHeight(rootNode.left),getHeight(rootNode.right))
}

function _balancedTree (rootNode) {
  if (!rootNode)
  return -1
  let left=_balancedTree(rootNode.left)
  let right=_balancedTree(rootNode.right)
  if (left!=-1 && right!=-1 && Math.abs(left-right)>1)
    return -1
  return Math.max(left,right)+1
}
function balancedTree(rootNode){
  return _balancedTree(rootNode)<=2
}

function countNodes (rootNode) {
  if(!rootNode)
  return 0
  
  return 1+countNodes(rootNode.left)+countNodes(rootNode.right)
}

function getParentNode(rootNode, target) {
  if(!rootNode)
  return undefined
  if (rootNode.val==target)
  return null
  if(rootNode && rootNode.left && rootNode.left.val==target)
  return rootNode
  if(rootNode && rootNode.right && rootNode.right.val==target)
  return rootNode
  let left=getParentNode(rootNode.left,target)
  let right=getParentNode(rootNode.right,target)
  if (left!=undefined)
  return left
  if (right!=undefined)
  return right
  return undefined
}
function _inOrderPredecessor(rootNode,target,prev){
  if(!rootNode)
  return 
  _inOrderPredecessor(rootNode.left,target,rootNode)
  if (rootNode.val==target)
  {
    prev=rootNode.left
    return
  }
  _inOrderPredecessor(rootNode.right,target,rootNode)
}
function inOrderPredecessor (rootNode, target) {
  let prev=null;
  _inOrderPredecessor(rootNode,target,prev)
  return prev
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
btRoot = new TreeNode(1);
btRoot.left = new TreeNode(2);
btRoot.left.left = new TreeNode(4);
btRoot.left.right = new TreeNode(5);
btRoot.right = new TreeNode(3);
btRoot.right.left = new TreeNode(6);
btRoot.right.right = new TreeNode(7);
console.log(inOrderPredecessor(btRoot,5).val)