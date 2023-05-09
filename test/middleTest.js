const middle = require('./middle');
const assert = require('chai').assert;
describe("#middle", () => {
  it("should return [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});
eqArrays([1, 2, 3], [1, 2, 3]);
middle([1, 2, 3, 4]);
middle([1, 2, 3, 4, 5, 6]);