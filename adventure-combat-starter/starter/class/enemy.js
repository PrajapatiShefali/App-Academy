const {Character} = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    super(name,description,currentRoom)
    this.cooldown=3000
    this.attackTarget=null
  }

  setPlayer(player) {
    this.player = player;
  }
  randomRoom(key) {
    return this.currentRoom.exits[key[key.length * Math.random() << 0]];
  };

  randomMove() {
    const key = Object.keys(this.currentRoom.exits);
    this.currentRoom = this.randomRoom(key);
    this.cooldown += 3000;
    this.act()
  }

  takeSandwich() {
    
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function() {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    if (this.attackTarget === null) return null;

    this.attackTarget.applyDamage(this.strength);
    console.log(`The ${this.name} hits you for ${this.strength} damage.`);
    this.cooldown += 3000;
    this.act();
  }

  applyDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) {
      this.die();
    } else {
      this.attackTarget = this.player;
      this.act();
    }  }



  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }

    // Fill this in
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }


}

module.exports = {
  Enemy,
};
