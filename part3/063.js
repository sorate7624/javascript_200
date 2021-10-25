// 정수 확인하기 (isInteger)
console.log(Number.isInteger(0)); // t
console.log(Number.isInteger(-1)); // t
console.log(Number.isInteger(77777777777777777777777)); // t
console.log(Number.isInteger(null)); // f
console.log(Number.isInteger(0/0)); // f
console.log(Number.isInteger('Infinity')); // f
console.log(Number.isInteger(true)); // f
console.log(Number.isInteger({})); // f