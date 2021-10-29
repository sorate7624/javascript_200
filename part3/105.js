// 객체에 속성 추가 못하게 만들기(seal)
const album = {
  name: 'LOVE YOURSELF'
};

album.song = 'Euporia';
album.singer = 'RM';

console.log(album);

Object.seal(album)

album.comment = 'Answer';
album.singer = 'JK';
delete album.name;

console.log(album);