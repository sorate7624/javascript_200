// 객체를 배열로 변환하기(entries)
const obj = {
  movie: 'sunny',
  music: 'Like sugar',
  style: 'retro',
  price: 'Infinity'
};

const modifiedObj = Object.entries(obj);
console.log(modifiedObj);