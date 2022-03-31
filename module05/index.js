function power(n) {
    return n ** n;
  }
  
  function cacher(func) {
    let cache = new Map();
  
    return function (n) {
      if (cache.has(n)) {
        console.log("From cache:");
        return cache.get(n);
      } else {
        let result = func(n);
        cache.set(n, result);
        console.log("Calculated:");
        return result;
      }
    };
  }
  
  const cachePower = cacher(power);
  
  console.log(cachePower(99)); //Calculated
  console.log(cachePower(99)); //From cache!
  