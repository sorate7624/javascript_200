// 스코프 이해하기
var a = 10;
console.log(a);

function print() {
  var b = 20;
  if (true) {
    var c = 30;
  }
  console.log(c);
}

print();
// console.log(b);