// 10진수 아닌 진법을 다른 진법으로 변환하기(parseInt)
const bin = 1000010011;
const oct = 1023;
const hex = 213;

const dexByBin = parseInt(bin, 2);
const dexByOct = parseInt(bin, 8);
const dexByHex = parseInt(bin, 16);
const hexByOct = parseInt(bin, 8).toString(16);

console.log(dexByBin);
console.log(dexByOct);
console.log(dexByHex);
console.log(hexByOct);