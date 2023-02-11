class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head=null
    this.length=0
  }

  addToHead(val) {
    let node=new LinkedListNode(val)
    node.next=this.head
    this.head=node
    this.length+=1
  }

  addToTail(val) {
    let node=new LinkedListNode(val)
    if (this.head==null)
    {this.head=node }
    else
      {
        let cur=this.head
        while (cur.next)
        {
          cur=cur.next
        }
        cur.next=node
        
       }
    this.length+=1
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;