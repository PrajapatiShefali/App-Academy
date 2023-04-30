const { expect } = require("chai")
const myMap=require("../problems/my-map")
const spies = require('chai-spies');
let chai=require("chai")
chai.use(spies);

describe("duplicating Array.map function",()=>{
    it("should not call built-in Array.map",()=>{
        expect(myMap([1,4,16],Math.sqrt)).to.deep.equal([1,2,4])
    })
    it("should not mutate the passed in array argument",()=>{
        let input=[1,4,16];
        myMap(input,Math.sqrt)
        expect(input).to.deep.equal([1,4,16])
    })
    it("Should call custom map",function(){
        let spy;
        spy=chai.spy.on(Array.prototype,"map")
        myMap([1,4,16],Math.sqrt)

    expect(spy).to.have.not.been.called();
    })
    it("call the passed callback once for each element in the passed-in array argument", function () {
        const sqrtSpy = chai.spy.on(Math, 'sqrt');
        myMap([100, 25, 81, 64], Math.sqrt);
        expect(sqrtSpy).to.have.been.called.exactly(4);
      })
})