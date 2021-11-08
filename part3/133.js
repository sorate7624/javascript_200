// Set 객체로 Array 중복 요소 없애기
const arr = ['one', 'two', 'three', 'two', 'one', 'four'];
const s = new Set(arr);
console.log([...s]);