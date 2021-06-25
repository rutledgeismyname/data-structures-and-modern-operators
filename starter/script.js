'use strict';

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
};
restaurant.orderDelivery({
  time: '12:32PM',
  address: '8201 Henry Ave',
  bill: '$52.39',
  tip: '$10.40',
  mainIndex: 3,
  starterIndex: 2,
});

/* /////////// Destructuring Objects //////////*/
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
