// Node.js 예외 처리하기
"use strict"

const cbFunc = (err, result) => {
  if (err & err instanceof Error) {
    return console.log(err.message);
  }
  if (err) {
    return console.log(err);
  }
  console.log('에러를 반환하지 않습니다.', result);
}

const asyncFunction = (isTrue, callback) => {
  const err = new Error('This is Error');
  if (isTrue) {
    return callback(null, isTrue);
  } else {
    return callback(err);
  }
}

asyncFunction(true, cbFunc);
asyncFunction(false, cbFunc);

const fs = require('fs');

try {
  const fileList = fs.readdirSync('/undefined/');
  fileList.forEach(f => console.log(f));
} catch (err) {
  if (err) {
    console.log(err);
  }
}