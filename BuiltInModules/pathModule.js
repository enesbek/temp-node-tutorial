const path = require('path')

console.log(path.sep);

const filePath = path.join('node-tutorial', 'BuiltInModules', 'pathModule.js')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname, 'osModule.js')
console.log(absolute);