// Event Emitter 이해하기 1
const Emitter = require('./Emitter');
const em = new Emitter();

em.on('greet', () => {
  console.log('Hello First');
});

em.on('greet', () => {
  console.log('Hello Second');
});

em.emit('greet');