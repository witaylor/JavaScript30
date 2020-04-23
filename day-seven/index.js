// Fill in the Syntax Highlighter section
document.querySelector('#prism-callout').innerHTML = JSON.stringify(
  {
    name: 'Prism',
    url: 'https://prismjs.com/',
  },
  null,
  2
);

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const currentYear = new Date().getFullYear();
const hasOneNineteenOrOlder = people.some(
  (person) => currentYear - person.year >= 19
);
console.log('Some 19 or over? ', hasOneNineteenOrOlder);
document.querySelector('#code-q1').innerHTML = hasOneNineteenOrOlder;

// Array.prototype.every() // is everyone 19 or older?
const hasAllNineteenOrOlder = people.every(
  (person) => currentYear - person.year >= 19
);
console.log('All 19 or over? ', hasAllNineteenOrOlder);
document.querySelector('#code-q2').innerHTML = hasAllNineteenOrOlder;

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const foundComment = comments.find((c) => c.id === 823423);
console.log('Comment with id 823423:', foundComment);
document.querySelector('#code-q3').innerHTML = JSON.stringify(
  foundComment,
  null,
  2
);

// Array.prototype.findIndex()
// Find the comment with this ID
const foundCommentIndex = comments.findIndex((c) => c.id === 823423);
console.log('Found comment index', foundCommentIndex);

// delete the comment with the ID of 823423
const newComments = [
  ...comments.slice(0, foundCommentIndex),
  ...comments.slice(foundCommentIndex + 1),
];
console.log('Deleted Comment: ', newComments);
document.querySelector('#code-q4').innerHTML = JSON.stringify(
  {
    deletedComment: comments[foundCommentIndex],
    result: newComments,
  },
  null,
  2
);
