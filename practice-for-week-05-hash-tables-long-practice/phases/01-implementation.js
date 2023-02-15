class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.set=new Set()
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.count=0
    this.capacity=numBuckets
    this.data=Array(numBuckets).fill(null)
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
   
    let node=new KeyValuePair(key,value)
    let hashh=this.hashMod(key)
    if (this.data[hashh]==null)
      {this.data[hashh]=node
        this.count+=1
        
      }
    else
    {
      let mark=false
      let cur=this.data[hashh]
      while (cur){
        if (cur.key==key){
          mark=true
          cur.value=value
          break
        }
        cur=cur.next
      }
      if (cur==null){
        if (!mark)
        {  node.next=this.data[hashh]
          this.data[hashh]=node 
          this.count+=1}
      }
      }
    
  }


  read(key) {
    let hashh=this.hashMod(key)
      let cur=this.data[hashh]
      while (cur){
        if (cur.key==key){
          return cur.value
        }
        cur=cur.next
      }
   return undefined
    
  }


  resize() {
    this.capacity*=2 
    let newData=Array(this.capacity).fill(null)
    for(let i=0;i<this.data.length;i++){
      if (this.data[i]!=null)
      {  
        let cur=this.data[i]
        while (cur)
        {  let value=this.hashMod(cur.key)
          newData[value]=cur
          cur=cur.next 
        }
      }
    }
    this.data=newData
  }


  delete(key) {
    let hashh=this.hashMod(key)
      let cur=this.data[hashh]
      let prev=cur 
      if (prev){
      if(prev.key==key)
     { this.data[hashh]=prev.next;
      this.count-=1
    }
      else
      {while (cur){
        if (cur.key==key){
          prev.next=cur.next
          this.count-=1
 
          break
        }
        prev=cur
        cur=cur.next}
      }
    }
  return "Key not found"
}
}


module.exports = HashTable;
let hashTable=new HashTable(2)
hashTable.insert("key1", "value1");
hashTable.insert("key2", "value2");
hashTable.insert("key3", "value3");

let capacity = hashTable.capacity;

hashTable.resize();

console.log(hashTable.count)
console.log(hashTable.capacity)
console.log(hashTable.data.length)

console.log(hashTable.read("key1"))
console.log(hashTable.read("key2"))
console.log(hashTable.read("key3"))
hashTable.delete("key2")
hashTable.delete("key9")
console.log(hashTable.read("key1"))

console.log(hashTable.read("key9"))
console.log(hashTable.read("key10"))

console.log(hashTable.delete("key2"))
console.log(hashTable.delete("key10"))
