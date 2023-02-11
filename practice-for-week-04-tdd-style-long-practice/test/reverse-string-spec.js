const { expect } = require("chai");
const reverseString =require("../problems/reverse-string");

describe("test functions",function(){
    it("should reverse the string",function(){
        expect(reverseString("fun")).to.equal("nuf")
    })
    it("should throw error if argument is not a string",function(){
        expect(reverseString(2)).to.eql(new Error("not a string"))
    })
});