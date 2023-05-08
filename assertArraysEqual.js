const eqArrays = function (array1, array2) {
  let Equal;

  if (array1.length === array2.length) {
    Equal = true;
  } else if (array1.length !== array2.length) {
    Equal = false;
  }

  return Equal;
};

const asserArraysEqual = function (array1, array2) {
  const result = eqArrays(array1, array2)
  if (result) {
    console.log("They are equal")
  } else {
    console.log("not equal")
  }
}
eqArrays([1, 2, 3], [1, 2, 3]);