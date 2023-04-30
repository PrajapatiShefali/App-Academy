
// FILL THIS OUT

const { Item } = require("./item");

class Food extends Item{
    constructor(name,description){
      super()
      this.isFood=true
      this.name=name
      this.description=description
    }
}

module.exports = {
  Food,
};
