// Map 객체 요소 나열하기(keys, value, entries)
const map = new Map();

map.set('one', 1);
map.set('two', 2);
map.set('three', 3);

const keys = map.keys();
const values = map.values();
const entries = map.entries();


console.log(keys.next().value);
console.log(values.next().value);
console.log(entries.next().value);

console.log(keys);
console.log(values);
console.log(entries);