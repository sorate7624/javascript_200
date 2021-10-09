// ES6의 향상된 객체 문법 알아보기 - 단축 속성명
var address = 'Seoul';
var members = {};
var addFamily = function (age, name, role) {
  this.members[role] = {
    age,
    name
  };
};
var getHeadcount = function () {
  return Object.keys(this.members).length;
};

var family = {
  address,
  members,
  addFamily,
  getHeadcount
};
family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdang1', 'dog');
console.log(family.getHeadcount());