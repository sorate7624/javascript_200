// ES6의 향상된 객체 문법 알아보기 - 속성 계산명
var obj = {};
for (var i = 0; i < 4; i++) {
  obj['key' + i] = i;
}
console.log(obj);

var profile = 'chloe:30';
var person = {
  [profile]: true,
  [profile.split(':')[0]]: profile.split(':')[1]
};
console.log(person);