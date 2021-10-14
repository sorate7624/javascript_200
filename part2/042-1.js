// const로 상수 선언하기
const CONST_USER = {
  name: 'jay',
  age: 30
};
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER.name = 'jay2';
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER = {
  name: 'bbp'
};