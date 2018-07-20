let data = require('./output.json');
let elasticlunr = require('elasticlunr');

var index = elasticlunr(function () {
  this.addField('title');
  this.addField('content');
  this.setRef('id');
});

for (let item of data) {
  // console.log(item);
  index.addDoc(item);
}

let searchResults = index.search("我们");
console.log(searchResults);
