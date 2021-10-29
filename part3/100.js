// 중첩된 배열을 단일하게 만들기(reduce)
const arr = [1, [2, 3],
  [4, 5, 6],
  ['배열', '나열하기'], 'Javascript'
];

const result = arr.reduce((acc, el) => {
  return acc.concat(el);
}, []);

console.log(result);