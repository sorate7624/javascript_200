// ES6의 향상된 객체 문법 알아보기 - 비구조화 할당
var obj = {
  a: 1,
  b: 2,
  c: 30,
  d: 44,
  e: 5
};

var {
  a,
  c
} = obj;
console.log(`a >>> ${a}`);
console.log(`c >>> ${c}`);

var {
  a: newA = 10,
  f: newF = 5
} = obj;
console.log(`newA >>> ${newA}`);
console.log(`newF >>> ${newF}`);