function iterableObject(timesToIterate) {
  return {
    [Symbol.iterator]() {
      let n1 = 0,
        n2 = 1,
        value;
      return {
        next() {
          [value, n1, n2] = [n1, n2, n1 + n2];
          if (value > timesToIterate) return { value, done: true };
          return { value, done: false };
        },
      };
    },
  };
}

let times = 100;
for (fibonacciNumber of iterableObject(times)) {
  console.log(fibonacciNumber);
}
