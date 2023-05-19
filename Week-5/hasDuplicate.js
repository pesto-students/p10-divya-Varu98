console.log("Hello CodeSandbox");

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

console.log(hasDuplicate([1, 1, 2, 3, 4, 5]));

// here the time and space complexity of the function is O(n) as the function iterates through each element one time and it will depend on the size of the array.

// Also based on the size of the array the size of the set created will increase.