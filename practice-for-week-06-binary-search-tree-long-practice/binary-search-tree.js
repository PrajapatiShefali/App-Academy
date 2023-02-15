// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
  
    constructor() {
      this.root=null
    }
  
    insert(val, currentNode=this.root) {
      let node=new TreeNode(val)
      if (this.root==null)
      {this.root=node
      return } 
      if (currentNode==null)
        return node
      else 
      {
        if (val<currentNode.val)
          currentNode.left=this.insert(val,currentNode.left)
        else
          currentNode.right=this.insert(val,currentNode.right)
        return currentNode
        }
    }
  
    search(val) {
      let node=new TreeNode(val)
      if (this.root.val==val)
      return true
      let temp=this.root
      while (temp){
        if (temp.val==val)
        return true
        if(temp.val>val)
        temp=temp.left
        else
        temp=temp.right 
      }
      return false
    }
  
  
    preOrderTraversal(currentNode = this.root) {
      if(!currentNode)
      return 
      console.log(currentNode.val)
      this.preOrderTraversal(currentNode.left)
      this.preOrderTraversal(currentNode.right)
    }
  
  
    inOrderTraversal(currentNode = this.root) {
      if(!currentNode)
        return 
      this.inOrderTraversal(currentNode.left)
      console.log(currentNode.val)
      this.inOrderTraversal(currentNode.right)
    }
  
  
    postOrderTraversal(currentNode = this.root) {
      // Your code here
      if(!currentNode)
      return
      this.postOrderTraversal(currentNode.left)
      this.postOrderTraversal(currentNode.right)
      console.log(currentNode.val)
    }
  
      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      let stack=[this.root]
      while(stack.length>0){
        let node=stack.shift()
        console.log(node.val)
        if(node.left)
        stack.push(node.left)
        if(node.right)
        stack.push(node.right)
      }
    }
  
    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      let stack=[this.root]
      while(stack.length>0){
        let node=stack.pop()
        console.log(node.val)
        if(node.left)
        stack.push(node.left)
        if(node.right)
        stack.push(node.right)
      }
  }
  }
  
  module.exports = { BinarySearchTree, TreeNode };
  
