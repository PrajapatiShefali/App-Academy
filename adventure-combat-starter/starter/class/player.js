const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    let obj=this.currentRoom.getItemByName(itemName)
    this.currentRoom.items=this.currentRoom.items.filter((e)=>e.name!=itemName)
    console.log("current room",this.currentRoom.items)
    this.items.push(obj)
   
    return this.getItemByName(itemName)
  }

  dropItem(itemName) {
    let obj=this.getItemByName(itemName)
    this.items=this.currentRoom.items.filter((e)=>e.name!=itemName)
    console.log("current room",this.items)
    this.currentRoom.items.push(obj)
   
    return this.currentRoom.getItemByName(itemName)

  }

  eatItem(itemName) {
    let sol=this.getItemByName(itemName)
    console.log("solu")
    if ((sol instanceof Food)==true)
        this.items=this.items.filter((e)=>e.name!==itemName)

  }

  getItemByName(name) {

    for (let i=0;i<this.items.length;i++){
      if (this.items[i].name==name)
      return this.items[i]
    }
  }

  hit(name) {

    const enemy = this.currentRoom.getEnemyByName(name);
    if (!enemy) {
      console.log("You can't hit that.");
    } else {
      enemy.applyDamage(this.strength);
      console.log(`You hit the ${enemy.name} for ${this.strength} damage.`);
      enemy.setPlayer(this);
    }
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
