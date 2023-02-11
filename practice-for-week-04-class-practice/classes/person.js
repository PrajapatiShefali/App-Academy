// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/
class Person{
  constructor(firstName,lastName,age){
    this.firstName=firstName
    this.lastName=lastName
    this.age=age 
  }
  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  }
  static introducePeople(arr){
    if(Array.isArray(arr)==false)
    throw new Error("introducePeople only takes an array as an argument.")
    else{
      for (let i=0;i<arr.length;i++){
        if (!(arr[i] instanceof Person))
        throw new Error("All items in array must be Person class instances.")

        else 
          arr[i].introduce()

      }
    }
  }
}
try {
  module.exports = Person;
} catch {
  module.exports = null;
}