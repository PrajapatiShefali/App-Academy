// Your code here

const Calculator = require("./02-calculator");

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/
class FancyCalculator extends Calculator{
	constructor(){
		super()
		this.total=0;
	}
	setTotal(newTotal){
		this.total=newTotal
		return this.total
	}
	modulo(num){
		this.total%=num 
		return this.total
	}
	squared(){
		this.total*=this.total
		return this.total
	}
}
try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}