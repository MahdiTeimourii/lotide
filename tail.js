const assertEqual = function (actual, expected) {

  let equal = false;
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} is equal to ${expected}`);
    equal = true;
  } else {
    console.log(`Assertion Failed: ${actual} is not equal to ${expected}`);
  }
  return equal;
};

assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 11);

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const tail = function (arr) {
  constOutArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      outputArr.push(arr[i]);
    }
  }
  return outputArr;
};
