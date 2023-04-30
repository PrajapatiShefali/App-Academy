class Person {
 
    constructor(name,age){
      this.name=name;
      this.age=age
    }
    sayHello(){
      return `Hello +${this.name}`
    }
    visit(otherPerson){
      return `${this.name}+ visited +${otherPerson.name}`;
    }
    swicthVisit(otherPerson){
      otherPerson.visit(this)
    }
    update(newPerson){
      if (typeof newPerson !== 'object') {
        throw TypeError("Type must be an object");
      }
      if (!newPerson.hasOwnProperty("name")) {
        throw TypeError("Input must include a name property");
      }
      if (!newPerson.hasOwnProperty("age")) {
        throw TypeError("Input must include a age property");
      }
      this.name = newPerson.name;
      this.age = newPerson.age;
    }
    tryUpdate(object){
      try{
        this.update(object)
        
      }
      catch(e){
        return false
      }
      return true 
    }
    static greetAll(people){
      let result=[];
      for (let i = 0; i < people.length; i++) {
        result.push(people[i].sayHello());
      }
      return result;
    }
}

module.exports = Person;