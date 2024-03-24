
const path = require('path');

console.log(path.sep)

console.log(path.join('books', 'mysteries', 'fantasy', 'romance', 'free', 'languages'))

console.log(__dirname)

const absolute = path.resolve(__dirname, 'app.js')

console.log(absolute)