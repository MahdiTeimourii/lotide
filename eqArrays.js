const eqArrays = function (array1, array2) {
  let Equal;

  if (array1.length === array2.length) {
    Equal = true;
  } else if (array1.length !== array2.length) {
    Equal = false;
  }

  return Equal;
};
eqArrays([1, 2, 3], [1, 2, 3]);