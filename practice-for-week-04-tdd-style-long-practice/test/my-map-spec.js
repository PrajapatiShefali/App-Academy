const { expect } = require("chai")
const myMap=require("../problems/my-map")
const spies = require('chai-spies');
let chai=require("chai")
chai.use(spies);

describe("duplicating Array.map function",()=>{
    it("should not call built-in Array.map",()=>{
        expect(myMap([1,4,16],Math.sqrt)).to.deep.equal([1,2,4])
    })
    let spy;
    before(function(){
        spy=chai.spy.on(Array,'map')
    })
    it("Should call custom map",function(){
        myMap([1,4,16],Math.sqrt)

    expect(spy).to.be.called.with([1,4,16],Math.sqrt);
    })
})