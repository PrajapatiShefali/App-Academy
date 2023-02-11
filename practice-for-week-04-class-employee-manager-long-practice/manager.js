const Employee = require("./employee");

class Manager extends Employee{
    constructor(name,salary,title,manager,employeelist=[])
    {
        super(name,salary,title,manager)
        this.employees=employeelist
    }
    addEmployee(employee){
     this.employees.push(employee)   
    }
    _totalSubSalary(employee){
        let total=employee.salary;
        let list=employee.employees
        for (let i=0;i<list.length;i++){
            if ((list[i] instanceof Manager)==true)
                total+=this._totalSubSalary(list[i])
            else if ((list[i] instanceof Employee)==true){
                total+=list[i].salary
            }
            }
        
        return total
    }
    calculateBonus(multiplier){
        
       
        let total=this._totalSubSalary(this)
        return total*multiplier
    }
}
module.exports=Manager
// const splinter = new Manager('Splinter', 100000, 'Sensei');
// const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
// const raph = new Manager('Raphael', 90000, 'Ninja', leo);
// const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
// const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

// console.log(splinter.calculateBonus(0.05)); // => 22500
// console.log(leo.calculateBonus(0.05)); // => 17500
// console.log(raph.calculateBonus(0.05)); // => 13000
// const raph = new Employee('Raphael', 90000, 'Ninja');
// const donny = new Employee('Donatello', 85000, 'Grasshopper');

// console.log(raph.calculateBonus(0.25)); // => 22500
// console.log(donny.calculateBonus(0.15)); // => 12750