
const letterPositions = function (sentence) {
  const results = {};
  let indexCounter = 0;
  for (let letters of sentence) {
    console.log('letters >', letters, ' results >', results[letters]);
    if (results[letters]) {
      results[letters].push(indexCounter);
    } else if (!results[letters] && letters !== ' ') {
      results[letters] = [indexCounter];
    }
    indexCounter++;
  }
  console.log(results);
  return results;
};
console.log((letterPositions("lighthouse in the house").e, [1]));