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

let searchText = "微前端";
let searchResults = idx.search(searchText);
console.log(searchResults);

for (let result of searchResults) {
  // console.log(dataWithIndex[result.ref].title);
  let replaceContent = dataWithIndex[result.ref].content.replace(/\n/g, '');
  let content = replaceContent.split(/[，。；！]+/);
  for (let sentence of content) {
    if (sentence.includes(searchText)) {
      console.log(sentence, searchText);
    }
  }
}
