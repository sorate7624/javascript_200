// Promise 이해하기
function promiseFoHomework(mustDo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('doing homework');
      if (mustDo) {
        resolve({
          result: 'homework-result',
        });
      } else {
        reject(new Error('Too lazy!'));
      }
    }, 3000);
  });
}

const promiseA = promiseFoHomework(true);
console.log('promiseA created');

const promiseB = promiseFoHomework();
console.log('promiseB created');

promiseA.then(v => console.log(v));
promiseA.then(v => console.log(v).catch(e => console.log(e)));