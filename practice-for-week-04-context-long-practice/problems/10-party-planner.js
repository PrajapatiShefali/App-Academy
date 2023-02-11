// Your code here

class PartyPlanner{
	constructor(){
		this.guestList=[]
	}
	throwParty(){
		if (this.guestList.length==0)
		return "Gotta add people to the guest list"
		else
		return `Welcome to the party ${this.guestList.join(' and ')}`
	}
	addToGuestList(name){
		this.guestList.push(name)
	}
}
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}