
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

const findKeyByValue = (bestTVShowsByGenre, key) => {
  for (let genre in bestTVShowsByGenre) {
    if (key === bestTVShowsByGenre[genre]) {
      return genre;
    }
  }
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);