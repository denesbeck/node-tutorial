const path = require('path');

console.log(path.sep);

const filePath = path.join('/route', 'to', 'my', 'file.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

console.log(__dirname);
const absolute = path.resolve(__dirname, 'route', 'to', 'my', 'file.txt');
console.log(absolute);
