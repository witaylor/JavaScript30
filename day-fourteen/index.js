const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// this will not copy, updating team will also update players
//* Pass by reference
const team = players;
console.log(players, team);

const team2 = players.slice();

// this will copy it
const team3 = [].concat(players);
const team4 = [...players];

team4[3] = 'heeee hawww';
console.log(team4);

const team5 = Array.from(players);

// it's the same thing for objects
const person = {
  name: 'Wes Bos',
  age: 80,
};

// copy the object
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);

const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer',
  },
};

console.clear();
console.log(wes);

const dev = Object.assign({}, wes);
const dev2 = JSON.parse(JSON.stringify(wes));
