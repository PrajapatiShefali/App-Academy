const { assert } = require("chai");
const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      let word1=new Word("test")
      let wordpassed="test"
      assert.equal(word1.word,wordpassed)
    });
  
    it('should set the "word" property when a new word is created', function () {
      let word1=new Word("test")
      let wordpassed="test"
      assert.equal(word1.word,wordpassed)
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      let word1=new Word("test")
      assert.equal(word1.removeVowels(),"tst")
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      let word1=new Word("test")
      assert.equal(word1.removeConsonants(),"e")
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      let word1=new Word("test")
      assert.equal(word1.pigLatin(),"esttay")
      let word2=new Word("olive")
      assert.equal(word2.pigLatin(),"oliveyay")
    });
  });
});