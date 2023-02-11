const Employee = require("./employee");
const Manager = require("./manager");


const hobbes = new Manager('Hobbes', 1000000, 'Founder');
const calvin = new Manager('calvin', 130000, 'Director', hobbes);
const susie = new Manager('Susie', 100000, 'TA manager', calvin);
const lily = new Employee('lily', 90000, 'TA', susie);
const clifford = new Employee('clifford', 90000, 'TA', susie);

console.log(hobbes.calculateBonus(0.05)); 
console.log(calvin.calculateBonus(0.05)); 
console.log(susie.calculateBonus(0.05)); 
console.log(lily.calculateBonus(0.05));
console.log(clifford.calculateBonus(0.05)); 