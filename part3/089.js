// 배열 인덱스로 특정 요소 수정하기(splice)
const fruits = ['melon', 'lemon', 'source', 'apple', 'juice'];

fruits.splice(4, 1);
fruits.splice(4, 0, 'grape');
fruits.splice(2, 1, 'mandarin', 'strawberry', 'watermelon');

console.log(fruits);