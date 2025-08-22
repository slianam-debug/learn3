var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "HW1",
  "level": "1",
  "url": "HW1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Homework 1",
  "body": " Homework 1  Due Wednesday, September 3     [Chapter 1, starting p.31]: 1.7*, 5.1, 5.2, 5.4    For problem 1.7: I expect to see an induction proof, with all details. Note that the convention is that the missing entries in the matrix are zeros.      [Chapter 2, starting p.69]: 2.3(ab), 2.4(abcde)*, 4.7*    For problem 2.4: Make sure to fully explain in each case why is a subgroup (prove it!) or why is not a subgroup (i.e. indicate which one of the laws in the definition of a subgroup does not hold and explain why.)    For problem 4.7: The last thing you are asked to prove in this exercise is that (assuming the given hypotheses), the set has cardinality . This is not completely obvious. You need to argue that the elements are distinct. For example, why can't we have or ?     [Problem A] Let be a subgroup of a group . Let , and let and be positive integers. Show that if and , then , where is the greatest common divisor of and .    "
},
{
  "id": "hw1-ex-1",
  "level": "2",
  "url": "HW1.html#hw1-ex-1",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": "  [Chapter 1, starting p.31]: 1.7*, 5.1, 5.2, 5.4    For problem 1.7: I expect to see an induction proof, with all details. Note that the convention is that the missing entries in the matrix are zeros.   "
},
{
  "id": "hw1-ex-2",
  "level": "2",
  "url": "HW1.html#hw1-ex-2",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "",
  "body": "  [Chapter 2, starting p.69]: 2.3(ab), 2.4(abcde)*, 4.7*    For problem 2.4: Make sure to fully explain in each case why is a subgroup (prove it!) or why is not a subgroup (i.e. indicate which one of the laws in the definition of a subgroup does not hold and explain why.)    For problem 4.7: The last thing you are asked to prove in this exercise is that (assuming the given hypotheses), the set has cardinality . This is not completely obvious. You need to argue that the elements are distinct. For example, why can't we have or ?   "
},
{
  "id": "hw1-ex-3",
  "level": "2",
  "url": "HW1.html#hw1-ex-3",
  "type": "Exercise",
  "number": "1.1.3",
  "title": "",
  "body": " [Problem A] Let be a subgroup of a group . Let , and let and be positive integers. Show that if and , then , where is the greatest common divisor of and .  "
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
