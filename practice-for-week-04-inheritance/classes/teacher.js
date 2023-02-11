const Person = require('./person');

// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/
class Teacher extends Person{
  constructor(fname,lname,subject,yoe){
    super(fname,lname)
    this.subject=subject
    this.yearsOfExperience=yoe
  }
  static combinedYearsOfExperience(arryofTeacher){
    let total=0
    for(let teacher of arryofTeacher){
      total+=teacher.yearsOfExperience
    }
    return total
  }
}
try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}