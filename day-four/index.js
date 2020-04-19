// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

document.querySelector('#prism-callout').innerHTML = JSON.stringify(
  {
    name: 'Prism',
    url: 'https://prismjs.com/',
  },
  null,
  2
);

// CHALLENGES START HERE
// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

const people = [
  'Beck, Glenn',
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Benchley, Robert',
  'Benenson, Peter',
  'Ben-Gurion, David',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'Berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black, Elk',
  'Blair, Robert',
  'Blair, Tony',
  'Blake, William',
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventorsIn1500s = inventors.filter(
  (i) => i.year >= 1500 && i.year < 1600
);
console.log(
  `Filter the list of inventors for those who were born in the 1500's`,
  inventorsIn1500s
);
document.querySelector('#code-q1').innerHTML = JSON.stringify(
  inventorsIn1500s,
  null,
  2
);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const inventorNames = inventors.map((i) => ({ first: i.first, last: i.last }));
console.log(
  'Give us an array of the inventors first and last names',
  inventorNames
);
document.querySelector('#code-q2').innerHTML = JSON.stringify(
  inventorNames,
  null,
  2
);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const oldestToYoungestInventors = inventors.sort((a, b) => a.year - b.year);
console.log(
  '3. Sort the inventors by birthdate, oldest to youngest',
  oldestToYoungestInventors
);
document.querySelector('#code-q3').innerHTML = JSON.stringify(
  oldestToYoungestInventors,
  null,
  2
);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYears = inventors.reduce(
  (total, inventor) => total + (inventor.passed - inventor.year),
  0
);
console.log(
  '4. How many years did all the inventors live all together?',
  totalYears
);
document.querySelector('#code-q4').innerHTML = JSON.stringify(
  { totalYears: totalYears },
  null,
  2
);

// 5. Sort the inventors by years lived
const sortedByYears = inventors.sort(
  (a, b) => a.passed - a.year - (b.passed - b.year)
);
console.log('5. Sort the inventors by years lived', sortedByYears);
document.querySelector('#code-q5').innerHTML = JSON.stringify(
  sortedByYears,
  null,
  2
);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links.map((l) => l.textContent).filter((str) => str.includes('de'));

// 6. sort Exercise
// Sort the people alphabetically by last name
const sortedPeople = people.sort((a, b) => {
  const [aLast, aFirst] = a.split(',');
  const [bLast, bFirst] = b.split(',');

  return aLast < bLast ? 1 : -1;
});
console.log('6. Sort the people alphabetically by last name', sortedPeople);
document.querySelector('#code-q6').innerHTML = JSON.stringify(
  sortedPeople,
  null,
  2
);

// 7. Reduce Exercise
// Sum up the instances of each of these
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
].reduce((sums, item) => {
  if (!sums[item]) sums[item] = 0;

  sums[item] += 1;
  return sums;
}, {});
console.log(`7. Sum up the instances of each of these`, data);
document.querySelector('#code-q7').innerHTML = JSON.stringify(data, null, 2);
