// Event Emitter 이해하기 2
const Emitter = require('events');
const evenetConfig = require('./config').events;
const em = new Emitter();

em.on(evenetConfig.GREET, () => {
  console.log('Somewhere, someone said hello.');
});

em.on(evenetConfig.GREET, () => {
  console.log('A Greeting occrred!');
});

em.emit(evenetConfig.GREET)