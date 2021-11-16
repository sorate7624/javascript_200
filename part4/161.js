// 웹 워커로 백그라운드 코드 실행하기
function fibonacciWorker(num) {
  if (num <= 1) {
    return 1;
  }
  return fibonacciWorker(num - 1) + fibonacciWorker(num - 2);
}

onmessage = function (e) {
  const num = e.data.num;
  console.log('메인 스크립트에서 전달 받은 메시지', e.data);

  if (!num) {
    throw new Error('숫자를 전달하지 않았습니다.');
  }

  const result = fibonacciWorker(num);
  this.postMessage(result);
}