const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
}


const count = function (arr) {
  /* IMPLEMENT ME */
  for (i = 0; i < count.length; i++) {
    count = count[i] + count[i];
    return count;
  }
};