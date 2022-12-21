const { readFile, writeFile } = require('fs').promises;
// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, result) => {
//       if (err) reject(err);
//       resolve(result);
//     });
//   });
// };

// getText('./myFolder/first.txt')
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

const start = async () => {
  let first;
  let second;

  try {
    first = await readFile('./myFolder/first.txt', 'utf8');
    console.log('🚀 ~ file: app.js:25 ~ start ~ first', first);
  } catch (err) {
    console.error(err);
  }
  try {
    second = await readFile('./myFolder/second.txt', 'utf8');
    console.log('🚀 ~ file: app.js:31 ~ start ~ second', second);
  } catch (err) {
    console.error(err);
  }

  try {
    await writeFile(
      './myFolder/log-async-await.txt',
      `Logging the readFilePromise results of the first and second files: ${first}, ${second}`
    );
  } catch (err) {
    console.error(err);
  }
};

start();
