// NaN 값 확인하기 (NumberisNaN)
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(undefined));
console.log(Number.isNaN('It is Number?'));
console.log(Number.isNaN(0));
console.log(Number.isNaN(null));
console.log(Number.isNaN(-1));
console.log(Number.isNaN(0/0)); // true
console.log(Number.isNaN(new Date()));
console.log(Number.isNaN(new Date().toString));
console.log(Number.isNaN('Infinity'));