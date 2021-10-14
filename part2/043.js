// 스코프 체인 이해하기
var person = 'harin';

function print() {
  var person2 = 'jay';

  function innerPrint() {
    console.log(person);
    console.log(person2);
  }

  innerPrint();

  console.log('print finished')
}

print();
console.log('finished');