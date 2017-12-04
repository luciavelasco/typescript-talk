// import * as moment from 'moment';
// import moment = require('moment');
// const moment = require('moment');
import { Chicken } from './src/chicken'

console.log('Hello World!');

// Example of static type checking
// let foo = 123;
// foo = '456';



const chicken = new Chicken();
console.log(`${chicken.speak()}`);
// console.log(`${chicken.speak()} at ${moment().format('h:mm:ssa')}`);
console.log(chicken.getInfo());

// todo: async/await