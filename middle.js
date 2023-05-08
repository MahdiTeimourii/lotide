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

const middle = function (middleOfArr) {
  const getMiddle = () => middleOfArr.length / 2;
  if (middleOfArr.length > 2) {
    if (middleOfArr.length % 2 === 0) {
      return [middleOfArr[getMiddle() - 1], middleOfArr[getMiddle()]];
    } else {
      return [middleOfArr[Math.floor(getMiddle())]];
    }
  }
  return [];
}
eqArrays([1, 2, 3], [1, 2, 3]);
middle([1, 2, 3, 4]);
middle([1, 2, 3, 4, 5, 6]);