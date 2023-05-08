const findKey = function (obj, stopSearch) {
  let retKey;

  for (const key in obj) {
    if (stopSearch(obj[key])) {
      retKey = key;
      break;
    }
  }
  return retKey;
};