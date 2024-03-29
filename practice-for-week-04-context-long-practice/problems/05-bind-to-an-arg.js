function bindToAnArg(func, arg) {
  return func.bind(Object,arg)
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
function iSpy(thing) {
  return "I spy a " + thing;
}

let spyTree = bindToAnArg(iSpy, "tree");
console.log(spyTree());        // => I spy a tree
console.log(spyTree("car"));   // => I spy a tree

let spyCar = bindToAnArg(iSpy, "car");
console.log(spyCar());         // => I spy a car
console.log(spyCar("potato")); // => I spy a car