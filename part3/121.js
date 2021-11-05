// 정규표현식으로 문자열 변환하기(exec)
const str = 'Java is not in Javascript';

const result1 = /java/ig.exec(str);
console.log(result1[0]);
console.log(result1.index);
console.log(result1.input);

const nums = '"1","2","3"';
const regex = /\d+/g;
while (result2 = regex.exec(nums)) {
  console.log(result2, regex.lastIndex);
}