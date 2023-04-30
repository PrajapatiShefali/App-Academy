const {Item} = require("../class/item.js");

class Character{

  constructor(name, description, currentRoom) {
    this.items=[]
    this.name=name
    this.description=description
    this.currentRoom=currentRoom
    this.health=100
    this.strength=10
    
  }

  applyDamage(amount) {
    this.health-=amount
    if (this.health==0)
    this.die()
  }

  die() {
    this.currentRoom.items=[...this.items]
    this.currentRoom=null  
  }

}

module.exports = {
  Character,
};
