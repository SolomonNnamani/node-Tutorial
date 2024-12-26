//This is a seperator property or module which returns a specifuc seperator(/ or \)
const path = require('path')
console.log(path.sep)

// You can use this to find a specific file locaton
const filePath = path.join('/content/', 'subfolder', 'text.txt')
console.log(filePath)

//baseName: Basically if you just want to open the last fle straightup
const base = path.basename(filePath)
console.log(base)

//Absolute: to find an absolute location... we should use this
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)