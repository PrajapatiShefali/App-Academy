// Your code here

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/
class Car{
	constructor(speed){
		this.speed=0
	}
	drive(newSpeed){
		this.speed=newSpeed
		return this.speed
	}
}
try {
	module.exports = Car;
} catch {
	module.exports = null;
}