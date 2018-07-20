let data = require('./output.json');
let lunr = require('lunr');
let dataWithIndex = [];

console.log(new Date());

let idx = lunr(function () {
  this.field('title', { boost: 10 });
  this.field('content');

  for (let item of data) {
    this.add(item);
    dataWithIndex[item.id] = item;
  }
});

console.log(new Date());

let searchResults = idx.search("微前端");
console.log(searchResults);

for (let result of searchResults) {
  console.log(dataWithIndex[result.ref].title);
}
