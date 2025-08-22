var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "HW1",
  "level": "1",
  "url": "HW1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Homework 1",
  "body": " Homework 1  Coming up  "
},
{
  "id": "HW2",
  "level": "1",
  "url": "HW2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Homework 2",
  "body": " Homework 2  Coming up  "
},
{
  "id": "Exam1-review",
  "level": "1",
  "url": "Exam1-review.html",
  "type": "Section",
  "number": "2.1",
  "title": "Review for Exam 1",
  "body": " Review for Exam 1  Coming up  "
},
{
  "id": "Exam2-review",
  "level": "1",
  "url": "Exam2-review.html",
  "type": "Section",
  "number": "2.2",
  "title": "Review for Exam 2",
  "body": " Review for Exam 2  Coming up  "
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
