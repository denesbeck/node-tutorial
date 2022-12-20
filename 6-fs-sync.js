const { readFileSync, writeFileSync } = require('fs');

console.log('🚀 Function started...');
const first = readFileSync('./myFolder/first.txt', 'utf8');
const second = readFileSync('./myFolder/second.txt', 'utf8');

writeFileSync('./myFolder/log-sync.txt', `Logging the readFileSync results of the first and second files: ${first}, ${second}`, {
  flag: 'a',
});

console.log('🚀 Function finished...');
