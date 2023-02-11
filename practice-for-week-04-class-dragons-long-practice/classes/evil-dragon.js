const Dragon = require("./dragon")

// Your code here
class EvilDragon extends Dragon{
    constructor(name,color,evilDoings,nemesis){
        super(name,color)
        this.evilDoings=evilDoings
        this.nemesis=nemesis
    }
    dontInviteThemOverForDinner(){
        for(let i=0;i<this.evilDoings.length;i++)
            console.log(`${this.name} will ${this.evilDoings[i]}`)
    }
    burnsNemesis(){
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`
    }
}
module.exports=EvilDragon