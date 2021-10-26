// 문자열 길이 구하기 (length)
const arr = ['Short', 'long sentence, it is not appropriate'];

arr.forEach(str => {
    if (str.length < 10) {
        console.log(str);
    }
});