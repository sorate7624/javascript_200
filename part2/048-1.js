// 자바스크립트 객체지향 프로그래밍 이해하기
const studentProto = {
  gainExp: function () {
    this.exp++;
  }
}

const harin = {
  name: '하린',
  age: 10,
  exp: 0,
  __proto__: studentProto
};

const bbo = {
  name: '뽀',
  age: 20,
  exp: 10,
  __proto__: studentProto
};

bbo.gainExp();
harin.gainExp();
harin.gainExp();
console.log(harin);
console.log(bbo);