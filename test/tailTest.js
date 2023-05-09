const assertEqual = require('./tail');
const assert = require('chai').assert;
describe("#tail", () => {
  it("returns ['There', 'Friend'] for ['Hello', 'There', 'Friend']", () => {
    let testArray = ["Hello", "There", "Friend"];
    assert.deepEqual(tail(testArray), ['There', 'Friend']);
  });
  assertEqual(head([5, 6, 7]), 5);
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

  module.exports = tail;