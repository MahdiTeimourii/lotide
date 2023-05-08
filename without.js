const eqArrays = function (array1, array2) {
  let Equal;

  if (array1.length === array2.length) {
    Equal = true;
  } else if (array1.length !== array2.length) {
    Equal = false;
  }

  return Equal;
};

const assertArraysEqual = function (array1, array2) {
  const result = eqArrays(array1, array2)
  if (result) {
    console.log("They are equal")
  } else {
    console.log("not equal")
  }
}
const without = function (source, itemsToRemove) {
  let NewArr;
  for (let item in NewArr) {
    if (itemsToRemove.includes(NewArr[item])) {
      NewArr.slice(item, 1);
    }
  }
  return NewArr;
};
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
