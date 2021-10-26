// 자료형 확인하기(typeof, instanceof)
const str = 'Javascript';
const strObj = new String('Javascript');
const num = 200;
const numObj = new Number(200);
const bool = true;
const boolObj = new Boolean(true);
const func = function () {};
const arr = [10, 200, 4000];
const obj = {
  a1: 'test'
};
const empty = null;
const notCalled = undefined;

console.log(typeof str === 'string');
console.log(typeof strObj === 'object');
console.log(typeof num === 'number');
console.log(typeof numObj === 'object');
console.log(typeof bool === 'boolean');
console.log(typeof boolObj === 'object');
console.log(typeof func === 'function');
console.log(typeof arr === 'object');
console.log(typeof obj === 'object');
console.log(typeof empty === 'object');
console.log(typeof notCalled === 'undefined');
console.log('str: ', str instanceof String);
console.log('strObj: ', strObj instanceof String);
console.log('num: ', num instanceof Number);
console.log('numObj: ', numObj instanceof Number);
console.log('bool: ', bool instanceof Boolean);
console.log('boolObj: ', boolObj instanceof Boolean);
console.log('arr: ', arr instanceof Array);
console.log('obj: ', obj instanceof Object);
console.log('func: ', func instanceof Function);
console.log('empty: ', empty instanceof Object);
// console.log(notCalled instanceof undefined);