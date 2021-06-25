'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];

  }

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
};

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