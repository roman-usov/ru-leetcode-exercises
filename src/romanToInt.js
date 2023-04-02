const romanToInt = (s) => {
  const romanToIntVocabulary = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  const regExpr = /(IV|IX|XL|XC|CD|CM|I|V|X|L|C|D|M)/g;
  const romansArr = s.match(regExpr);

  return romansArr.reduce((int, roman) => int + romanToIntVocabulary[roman], 0);
};

const cacheFunction = (fn) => {
  const cache = new Map();

  return (s) => {
    const cachedValue = cache.get(s);
    if (cachedValue) {
      return cachedValue;
    }
    const result = fn(s);
    cache.set(s, result);
    return result;
  };
};

const romanToIntWithCache = cacheFunction(romanToInt);

console.assert(
  romanToIntWithCache('MCMXCIV') === 1994,
  `expected ${1994}, received ${romanToIntWithCache('MCMXCIV')}`
);
console.assert(
  romanToIntWithCache('III') === 3,
  `expected ${3}, received ${romanToIntWithCache('III')}`
);
console.assert(
  romanToIntWithCache('LVIII') === 58,
  `expected ${58}, received ${romanToIntWithCache('LVIII')}`
);
