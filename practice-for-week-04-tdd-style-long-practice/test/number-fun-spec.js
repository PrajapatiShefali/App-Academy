const { expect } = require("chai");
const {returnsThree,reciprocal}=require('../problems/number-fun')
// Your code here
describe("Test returnsThree function",()=>{
    it("should return three",()=>{
        expect(returnsThree()).equal(3)
    })
    it("should return the reciprocal",()=>{
        expect(reciprocal(3)).equal(1/3)
    })
    it("should throw an error",()=>{
        try{
            reciprocal(0)
        }
        catch(err)
        {expect(err).to.eql(new Error("not a valid number"))}
    })
})