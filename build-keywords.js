var jieba = require('nodejieba');
var data = require('./output');
var contents = '';

for (let item of data) {
  contents = contents + item.content;
}

let top500 = 500;
let extract = jieba.extract(contents, top500);

console.log(JSON.stringify(extract));
