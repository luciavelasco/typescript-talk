// import * as moment from 'moment';
// import moment = require('moment');
// const moment = require('moment');
import { Chicken } from './src/chicken'

console.log('Hello World!');

/**
 * 1. Setup
 * 2. Different types and how to use them
 * 3. Interfaces
 * 4. Generics
 * 5. JS vs ES6 vs TS
 */


// Typings
// any, array, typles, void, enum, type, null, undefined, never
// Typings and naming as good documentation
// types helping you write by telling you what's next and what's available

// Generics

// Compare how-to in JS/ES5 vs ES6/2015 vs TS


// Example of static type checking
// let foo = 123;
// foo = '456';



const chicken = new Chicken();
console.log(`${chicken.speak()}`);
// console.log(`${chicken.speak()} at ${moment().format('h:mm:ssa')}`);
console.log(chicken.getInfo());



function grabOne<T>(options: T[]): T {
  return options[Math.floor(Math.random() * options.length)];
}

type TFruit = 'banana' | 'orange' | 'apple'
const fruitBowl: TFruit[] = ['banana', 'banana', 'orange', 'apple', 'apple', 'apple']
console.log(grabOne<TFruit>(fruitBowl))