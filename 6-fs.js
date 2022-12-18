const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./myFolder/first.txt', 'utf8');
console.log('🚀 ~ file: 6-fs.js:4 ~ first', first);
const second = readFileSync('./myFolder/second.txt', 'utf8');
console.log('🚀 ~ file: 6-fs.js:6 ~ second', second);

writeFileSync('./myFolder/log.txt', `Logging the readFileSync results of the first and second files: ${first}, ${second}`, { flag: 'a' });
