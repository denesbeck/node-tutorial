const { readFile, writeFile } = require('fs');

console.log('🚀 Function started...');
readFile('./myFolder/first.txt', 'utf8', (error, result) => {
  if (error) return console.error(error);
  const first = result;

  readFile('./myFolder/second.txt', 'utf8', (err, res) => {
    if (err) return console.error(err);
    const second = res;

    writeFile('./myFolder/log-async.txt', `Logging the readFile results of the first and second files: ${first}, ${second}`, (e, r) => {
      if (e) return console.error(e);
      console.log('🚀 Writing finished...');
    });
  });
});
console.log('🚀 Function finished...');
