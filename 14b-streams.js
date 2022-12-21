const { createReadStream } = require('fs');

const stream = createReadStream('./myFolder/big-file.txt', { highWaterMark: 90000, encoding: 'utf8' });

stream.on('data', (res) => console.log(res));
stream.on('error', (err) => console.error(err));
