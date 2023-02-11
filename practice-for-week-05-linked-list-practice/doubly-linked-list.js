class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head=null
    this.tail=this.head 
    this.length=0
  }

  addToHead(val) {
    let node=new DoublyLinkedListNode(val)
    if (this.head==null)
    {
      this.head=node
      this.tail=node
    }
    else{
      node.next=this.head 
      this.head.prev=node 
      this.head=node 

    }
    this.length+=1
    
  }

  addToTail(val) {
    let node=new DoublyLinkedListNode(val)
    if (this.head==null)
    {
      this.head=node
      this.tail=node
    }
    else{
      let cur=this.head 
      while(cur.next)
        cur=cur.next
      node.prev=cur
      cur.next=node 
      this.tail=node
    }
    this.length+=1
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;