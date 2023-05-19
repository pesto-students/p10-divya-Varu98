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
