const strings = ['doggy', 'dog', 'dogma'];
const strings2 = ['dog', 'racecar', 'car'];

const longestCommonPrefix = (strs) => {
  const sortedArray = [...strs].sort();
  /*
  1. Take the first letter of the first word
  2. Compare it to the first letter of each subsequent word
  3. If they all match, add the letter to the prefix
  4. Proceed to the second letter of the first word and repeat the steps until the end of the first word
  * */

  let prefixes = '';
  const firstWord = sortedArray[0];
  const arrLength = sortedArray.length;

  for (
    let letterCounter = 0;
    letterCounter < firstWord.length;
    letterCounter += 1
  ) {
    const currLetterOfFirstWord = firstWord[letterCounter];

    for (let wordCounter = 1; wordCounter < arrLength; wordCounter += 1) {
      const currWord = sortedArray[wordCounter];
      const currLetterOfCurrWord = currWord[letterCounter];
      if (currLetterOfFirstWord === currLetterOfCurrWord) continue;
      return prefixes;
    }

    prefixes = `${prefixes}${currLetterOfFirstWord}`;
  }

  return prefixes;
};

console.log(longestCommonPrefix(strings));

console.log('strings2', longestCommonPrefix(strings2));

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));

// BEST LEETCODE SOLUTION

const longestCommonPrefixBest = function (strs) {
  if (strs === undefined || strs.length === 0) {
    return '';
  }
  /*
    If no initial value is provided for reduce, the first element of the array will be used as prev
    1. Take the first word as prev.
    2. Take the second word as next.
    3. Set the counter to 0.
    4. If a letter for the current counter exists both for prev and next, and the letter is the same, increment the counter.
    5. Once the condition is not met, slice prev up to the current counter and set is as the current prev's value.
    6. Repeat until the end of the array, comparing the new prev value to each subsequent string.
    7. Return the resulting reduced string.
  * */
  return strs.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  });
};
