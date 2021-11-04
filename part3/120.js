// 정규표현식으로 특정 문자의 포함 여부 확인하기(test)
const numRegExp = /[0-9]+/;
const phoneRegExp = /\d{3}-\d{3,4}-\d{4}$/;
const emailRegExp = /^([-_.]?[0-9a-zA-Z]{6,13})+\@([0-9a-z]+)\.([a-z]{2,3})$/i;

console.log(numRegExp.test(12345));
console.log(numRegExp.test('test'));
console.log(phoneRegExp.test('010-3003-0046'));
console.log(phoneRegExp.test('02-8844-1234'));
console.log(emailRegExp.test('test123@javascrpt.org'));
console.log(emailRegExp.test('test-javascript'));