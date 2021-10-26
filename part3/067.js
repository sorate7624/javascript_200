// 문자열 양 끝의 공백 없애기 (trim)
const sentences = ['    ABC abc', 'ABC abc  ', ` first
second third
        forth
sentence


`];
const filterSentece = (sentences) => {
    const filtered = [];
    sentences.forEach(s => {
        filtered.push(s.trim());
    });
    return filtered;
}

console.log(filterSentece(sentences));