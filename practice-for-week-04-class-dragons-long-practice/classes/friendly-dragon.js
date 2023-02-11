const Dragon = require("./dragon");

class FriendlyDragon extends Dragon{
    constructor(name,color,lifeGoal,friend){
        super(name,color)
        this.lifeGoals=lifeGoal
        this.friend=friend
    }
    hasLifeGoals(){
        for(let i=0;i<this.lifeGoals.length;i++)
            console.log(`${this.name} likes to ${this.lifeGoals[i]}`)
    }
    helpsPeople(){
        return (`${this.name} helps their friend ${this.friend}`)
    }
}
module.exports=FriendlyDragon