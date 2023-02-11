const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

LLstart=Date.now()
l1=new LinkedList()
l1.addToHead(1)
l1.addToHead(2)
l1.addToHead(3)
l1.addToTail(4)
l1.print()
LLend=Date.now()
console.log(` time taken ${LLend-LLstart}ms`)
// Your code here
DLLstart=Date.now()
l1=new DoublyLinkedList()
l1.addToHead(1)
l1.addToHead(2)
l1.addToHead(3)
l1.addToTail(4)
l1.print()
DLLend=Date.now()
console.log(` time taken ${DLLend-DLLstart}ms`)