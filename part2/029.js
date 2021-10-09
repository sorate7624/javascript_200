// 객체 이해하기 2 (속성 적근/추가/수정/삭제)
var family = {
  'address': 'Seoul',
  members: {},
  addFamily: function (age, name, role) {
    this.members[role] = {
      age: age,
      name: name
    };
  },
  getHeadcount: function () {
    return Object.keys(this.members).length;
  }
};

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(30, 'chloe', 'aunt');
family.addFamily(30, 'chloe', 'aunt');

var printMembers = function () {
  var members = family.members;
  for (role in members) {
    console.log('role => ' + role + ', name => ' + memebers[role].name + ', age => ' + members[role].age);
  }
};
printMembers();

var members = family.members;
members['nephew'] = {
  age: 3,
  name: 'hyun'
};
members.niece = {
  age: 5,
  name: 'lyn'
};
delete members.aunt;
delete members['dog'];
printMembers();