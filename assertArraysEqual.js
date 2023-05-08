const assertEqual = require('./eqArrays');

const assertArraysEqual = function (array1, array2) {
  let result = assertEqual(array1, array2)
  if (result = true) {
    console.log("They are equal")
  } else {
    console.log("not equal")
  }
}
assertArraysEqual([1, 2, 3], [1, 2, 3]);

module.exports = assertArraysEqual;