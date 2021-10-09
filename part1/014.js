// 반복문 배우기 - for in
var store = {
  snack: 1000,
  flower: 5000,
  beverage: 2000
};

for (var item in store) {
  if (!store.hasOwnProperty(item)) {
    continue;
  }
  console.log('item: ' + item);
  console.log('store: ' + store);

  console.log(item + '는 가격이 ' + store[item] + '입니다.');
}