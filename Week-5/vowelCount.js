function isVowel(char) {
  return "aeiou".includes(char);
}

function vowelCount(str) {
  let vowelMap = new Map();
  let lowerCasedStr = str.toLowerCase();
  for (char of lowerCasedStr) {
    if (isVowel(char)) {
      if (vowelMap.has(char)) {
        vowelMap.set(char, vowelMap.get(char) + 1);
      } else {
        vowelMap.set(char, 1);
      }
    }
  }
  return vowelMap;
}
console.log(vowelCount("TWYNDYLLYNGS"));
console.log(vowelCount("Hello World"));

// here time complexity will be O(n) as the loop will iterate over all the elements and the length of the elements will depend on the size of the input.

// Also considering the best and worst case the space complexity will be O(n) since the size of the map will also depend on the input provided.