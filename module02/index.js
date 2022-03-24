const addAll = (...args) => {
  let arr = [...args];
  return arr.reduce((pre, curr) => pre + curr);
};

const memoize = (func) => {
  let cache = {};
  return (...args) => {
    let keys = JSON.stringify(args);
    if (!cache[keys]) {
      console.log("Calculating anew");
      cache[keys] = func(...args);
      return cache[keys];
    } else {
      console.log("From cache!");
      return cache[keys];
    }
  };
};

const memoizedAddAll = memoize(addAll);
console.time('First')
console.log(memoizedAddAll(10, 11, 12, 13));
console.timeEnd('First')
console.time('Second')
console.log(memoizedAddAll(10, 11, 12, 13));
console.timeEnd('Second')
console.time('Third')
console.log(memoizedAddAll(10, 11, 12, 13));
console.timeEnd('Third')
console.time('Fourth')
console.log(memoizedAddAll(10, 11, 12, 13));
console.timeEnd('Fourth')


// console.log(addAll(10, 11, 12, 13));
