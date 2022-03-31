const memoize = (func) => {
  let cache = {};
  return (num, i) => {
    let key = JSON.stringify({ num, i });
    if (!cache[key]) {
      cache[key] = func(num, i);
      return cache[key];
    } else {
      return cache[key];
    }
  };
};

const makeArr = (n, i) => {
  let arr = [];
  arr.length = n - 1;
  return arr.fill("*", 0, n)[i];
};

// console.time("Simple #1")
// console.log(makeArr(700_000, 690_000));
// console.timeEnd("Simple #1")

// console.time("Simple #2")
// console.log(makeArr(700_000, 690_000));
// console.timeEnd("Simple #2")

// console.time("Simple #3")
// console.log(makeArr(700_000, 690_000));
// console.timeEnd("Simple #3")

const memoArr = memoize(makeArr);

console.time("Memo #1");
console.log(memoArr(70_000, 69_000));
console.timeEnd("Memo #1");

console.time("Memo #2");
console.log(memoArr(70_000, 69_000));
console.timeEnd("Memo #2");

console.time("Memo #3");
console.log(memoArr(70_000, 69_000));
console.timeEnd("Memo #3");
