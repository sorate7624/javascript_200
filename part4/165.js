// Node.js 내장 모듈 사용하기
const util = require('util');

const name = 'Tony';
const greeting = util.format('Hello %s', name);
console.log(greeting);