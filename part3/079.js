// 배열 요소를 분할/변환하기 (from)
const str = '12345678';

const distributtedArr = Array.from(str);
console.log(distributtedArr);

const modifiedArr = Array.from(distributtedArr, el => el * 2);
console.log(modifiedArr);