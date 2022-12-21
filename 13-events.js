const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('response', (obj) => console.log('data received =>', obj));

myEmitter.emit('response', { name: 'John' });
