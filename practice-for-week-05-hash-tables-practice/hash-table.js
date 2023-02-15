const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count=0
    this.capacity=numBuckets
    this.data=Array(numBuckets).fill(null)
  }

  hash(key) {
    let hashh=sha256(key)
    hashh=parseInt(hashh.slice(0,8),16)

    return hashh
  }

  hashMod(key) {
    return this.hash(key)%this.capacity
  }

  insertNoCollisions(key, value) {
    let hashh=this.hashMod(key)
    if (this.data[hashh]==null){
      this.data[hashh]=new KeyValuePair(key,value)
      this.count+=1
    }
    else
    {
      throw new Error("hash collision or same key/value pair already exists!")
    }
  }

  insertWithHashCollisions(key, value) {
    let node=new KeyValuePair(key,value)
    let hashh=this.hashMod(key)
    if (this.data[hashh]==null)
      {this.data[hashh]=node
        this.count+=1
      }
    else
    {
      let cur=this.data[hashh]
      node.next=cur
      this.data[hashh]=node 
      this.count+=1
    }
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
  }




module.exports = HashTable;    
let hashTable=new HashTable(2)
hashTable.insert("key-1", "val-1");
hashTable.insert("key-2", "val-2");
hashTable.insert("key-3", "val-3");
hashTable.insert("key-1", "val-100000");
