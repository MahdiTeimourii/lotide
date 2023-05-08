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

const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      !results[item] ? results[item] = 1 : results[item] += 1;
    }
  }
  return results;
};