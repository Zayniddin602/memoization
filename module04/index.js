

const pow = (a, n) => {
    if(n == 1){
        return a
    }else{
        return a * pow(a, n-1)
    }
//   for (let i = 1; i < n; i++) a *= a;
//   return a
};
console.time('Simple1')
console.log(pow(2, 111));
console.timeEnd('Simple1')   

console.time('Simple2')
console.log(pow(2, 111));
console.timeEnd('Simple2')   

console.time('Simple3')
console.log(pow(2, 111));
console.timeEnd('Simple3')   
