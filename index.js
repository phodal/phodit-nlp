let nodejieba = require("nodejieba");
nodejieba.load();

let topN = 1000;
let data = require('./output.json');
let allPosts = '';
for (let item of data) {
  allPosts = allPosts + item.content;
}
console.log(JSON.stringify(nodejieba.extract(allPosts, topN)));
