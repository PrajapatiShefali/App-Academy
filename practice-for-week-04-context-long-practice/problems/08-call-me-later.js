// Your code here
class CallCenter{
	constructor(name){
		this.name=name 
		
	}
	sayHello(){
		console.log(`Hello this is ${this.name}`)
	}
	callMeLater(delay){
		let callback=this.sayHello.bind(this)
		 setTimeout(callback,delay)
	}
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}