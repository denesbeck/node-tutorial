const { writeFileSync } = require('fs');

for (let i = 0; i <= 100000; i++) {
  writeFileSync('./myFolder/big-file.txt', `Hello world ${i}!`, { flag: 'a' });
}
