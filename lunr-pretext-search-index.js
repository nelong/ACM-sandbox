var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-test1",
  "level": "1",
  "url": "sec-test1.html",
  "type": "Section",
  "number": "9.1",
  "title": "Title goes here",
  "body": " Title goes here  Here is some text. I will put some graphics below   The coordinate planes in three dimensions    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.   Plots of the three coordinate planes     Temporary placeholder       Temporary placeholder       Temporary placeholder       "
},
{
  "id": "coor-planes",
  "level": "2",
  "url": "sec-test1.html#coor-planes",
  "type": "Figure",
  "number": "9.1.1",
  "title": "",
  "body": " The coordinate planes in three dimensions   "
},
{
  "id": "coorplane1",
  "level": "2",
  "url": "sec-test1.html#coorplane1",
  "type": "Figure",
  "number": "9.1.2",
  "title": "",
  "body": " Plots of the three coordinate planes     Temporary placeholder       Temporary placeholder       Temporary placeholder      "
},
{
  "id": "sec-test2",
  "level": "1",
  "url": "sec-test2.html",
  "type": "Section",
  "number": "10.1",
  "title": "Title goes here",
  "body": " Title goes here  Here is some text. I will put some graphics below  "
},
{
  "id": "root-1-2-6-1",
  "level": "1",
  "url": "root-1-2-6-1.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
