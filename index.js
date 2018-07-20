let data = require('./output.json');
let lunr = require('lunr');

let idx = lunr(function () {
  this.field('title');
  this.field('content');

  for (let item of data) {
    this.add(item)
  }
});

let searchResults = idx.search("www");
console.log(searchResults);
