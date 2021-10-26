// 자바스크립트 객체지향 프로그래밍 이해하기
const teacherJay = {
  name: '제이',
  age: 30,
  teaceJavascript: function (student) {
    student.gainExp();
  }
}

const studentBbo = {
  name: '뽀',
  age: 20,
  exp: 0,
  gainExp: function () {
    this.exp++;
  }
}

console.log(studentBbo.exp);
teacherJay.teaceJavascript(studentBbo);
console.log(studentBbo.exp);
