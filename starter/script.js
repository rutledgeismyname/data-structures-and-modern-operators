'use strict';
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto', 'Clams'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex,
    mainIndex,
    time,
    address,
    bill,
    tip,
  }) {
    console.log(
      `Order received! Your ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to address: ${address} at ${time}. Thank you for your purchase at ${this.name}! Final bill is ${bill}. Suggested tip is ${tip}.`
    );
  },
  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  }

};
//Short Circuiting (&& and ||)
console.log(0 || 'Chris');
console.log(0 && 'Chris');

// The Nullish Coalescing Operator 
restaurant,numbGuests = 0;
const guests = restaurant.numbGuests || 10;
console.log(guests);

// Nullish values instead of false values. So it workes with null and underfined values. 
const guestsCorrect = restaurant.numbGuests ?? 10;
console.log(guestsCorrect);

// Spread operator array
const arr = [7,8,9];

// Bad Way to use a Spread operator 
const badNewArr = [1,2, arr[0], arr[1],arr[2]];
console.log(badNewArr);

// Good Way to use a Spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

// Writing new array to add element option to Main Menu
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Joing 2 Arrays 
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables: arrays, strings, maps, sets. NOT Objects

const str = 'Chris';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);

const ingredients = [
  prompt(`Let's make pasta! Ingredient 1?`), 
  prompt(`Let's make pasta! Ingredient 2?`), 
  prompt(`Let's make pasta! Ingredient 3?`)
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);
/*
restaurant.orderDelivery({
  time: '12:32PM',
  address: '8201 Henry Ave',
  bill: '$52.39',
  tip: '$10.40',
  mainIndex: 3,
  starterIndex: 2,
});
*/
/* /////////// Destructuring Objects //////////*/
/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// Defualt Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);

console.log(a, b);

/* /////////// Destructuring Arrays //////////*/

/*
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

let [main, secondary] = restaurant.categories;

// const temp = main;
// main = secondary;
// secondary = temp;


// Switching Variables
[main, secondary] = [secondary, main];


const [starter, mainCourse] = (restaurant.order(2,0));
//Destructuring 
const nested = [2, 4, [5, 6]];
const [i, ,[j, k]] = nested;

console.log(i,j,k);

const [p=1, q=1, r=1] = [8,9];

console.log(p,q,r);

*/



// Coding Challenge #1 

/* 
"We're building a football betting app (soccer for my American friends)!
Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.

Your tasks:

1.  Create one player array for each team (variables 'players1' and
'players2')

2.  The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

3.  Create an array 'allPlayers' containing all players of both teams (22 players)

4.  During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

5.  Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')

6.  Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

7.  The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 1.33,
  },
  };

  //1. Create one player array for each team (variables 'players1' and 'players2')
  const [players1, players2] = game.players;
  //console.log(players1, players2);


  //2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
  const [gk, ...fieldPlayers] = players1;
  //console.log(gk, fieldPlayers);


  //3. Create an array 'allPlayers' containing all players of both teams (22 players)
  const allPlayers = [...players1, ...players2];
  //console.log(allPlayers);


  //4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  //console.log(players1Final);

  // 5.  Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
  const {odds: {team1, x: draw, team2}} = game;
  //console.log(team1, draw, team2);


  //6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
  const printGoals = function(...players){
    console.log(`${players.length} goals were scored`);
  };
  printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
  printGoals('Davies', 'Muller');
  printGoals(...game.scored);


  //7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
  team1 < team2 && console.log('Team 1 is more likely to win');
  team1 > team2 && console.log('Team 2 is more likel to win');
  // If teams odds are evenly matched. Manually adjusted of course. 
  team1 == team2 && console.log('The teams are evenly matched, could end in a draw.');