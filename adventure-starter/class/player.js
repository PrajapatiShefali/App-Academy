const { Item } = require("./item");
const { Room } = require("./room");
const {Food} =require("./food")
class Player extends (Room, Food){

    constructor(name, startingRoom) {
        super()
        this.currentRoom=startingRoom
        this.name = name;
        this.items = [];
        
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
        for(let i=0;i<this.items.length;i++){
            if (this.items[i].name==name)
            {
                return this.items[i]
            }
        }

        // Fill this in
    }
}

module.exports = {
  Player,
};
let food = new Food("sandwich", "a delicious sandwich");
let room = new Room("Test Room", "A test room");

let player = new Player("player", room);


player.items.push(food);

console.log(player.items.length)
console.log(player.items)

player.eatItem("sandwhich");
console.log(player.items)

console.log(player.items.length)

