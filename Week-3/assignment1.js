function add(...args) {
  let sum = 0;
  let additionArray = args.map((element) => (sum += element));
  return sum;
}

const time = (fn) => {
  console.time();
  console.log(fn());
  console.timeEnd();
};

const memoize = (fn) => {
  // lexical environment for the return function.
  const cache = new Map();

  return (...args) => {
    const key = args.toString();
    console.log("------------------");
    console.log("key before if statement", key);
    if (cache.has(key)) {
      console.log("from cache", cache);
      console.log("calling from cache", cache.get(key));
      return cache.get(key);
    }
    cache.set(key, fn(...args));
    console.log("from return call", cache);
    console.log("calling new value", cache.get(key));
    return cache.get(key);
  };
};
const addM = memoize(add);

time(() => addM(78, 56, 4, 5, 6, 6, 23, 623));
time(() => addM(78, 56, 4, 5, 6, 6, 23, 623));
time(() => addM(78, 56));
time(() => addM(78, 51));
time(() => addM(78, 51));
time(() => addM(780000, 9800000));
time(() => addM(780000, 9800000));
