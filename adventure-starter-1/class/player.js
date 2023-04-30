const { Item } = require("./item");

class Player extends Item{

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
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

        for (let i=0;i<this.items.length;i++){
            if (this.items[i].name===itemName)
                this.items[i]
           }

    }

    dropItem(itemName) {

        // Fill this in
    }

    eatItem(itemName) {
        // Fill this in

    }

    getItemByName(name) {

        for (let i=0;i<this.items.length;i++){
            if (this.items[i].name===name)
            return this.items[i] 
           }
    }
}

module.exports = {
  Player,
};
