// 특정 자리수에 반올림하기(round)
const val = 573.926;

console.log(Math.round(val));
console.log(Math.round(val * 10) / 10);
console.log(Math.round(val * 100) / 100);
console.log(Math.round(val / 100) * 10);
console.log(Math.round(val / 100) * 100);