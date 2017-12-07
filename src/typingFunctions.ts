type TFruit = 'banana' | 'orange' | 'apple'
type TVegetables = 'leek' | 'carrot'
const fruitBowl: TFruit[] = ['banana', 'banana', 'orange', 'apple', 'apple', 'apple']
const fruitAndVegetables: Array<TFruit | TVegetables> = ['banana', 'banana', 'banana', 'leek', 'leek', 'orange']

// Typehint parameters and return
function countBananas(fruit: TFruit[]): number {
  return fruit.filter(v => {
    return v === 'banana'
  }).length
}

// Typecast arguments
// console.log(`There are ${countBananas(fruitBowl)} bananas`)
// console.log(`There are ${countBananas(fruitAndVegetables as TFruit[])} bananas`)

// // Type any and using void
// function countApples(fruit: any): number | void {
//   if (!fruit || !Array.isArray(fruit)) return;
//
//   return fruit.filter(v => {
//     return v === 'apple'
//   }).length
// }
// console.log(`There are ${countApples(fruitBowl)} apples`)
// console.log(`There are ${countApples({})} apples`)

// Promise, typehinting functions
// function countOranges(fruit: TFruit[]): number | void {
//   if (!fruit || !Array.isArray(fruit)) return;
//   return fruit.filter(v => {
//     return v === 'orange'
//   }).length
// }
// async function promiseFruit(countFruit: (fruit: TFruit[]) => any): Promise<any> {
//   return countFruit(fruitBowl)
// }
// console.log(`There are ${countOranges(fruitBowl)} oranges`)
// promiseFruit(countOranges).then(numberOfOranges => {
//   if (numberOfOranges)
//   console.log(`There are ${numberOfOranges} oranges`)
// })

// // never
// function juggleOranges(): never {
//   throw new Error('Don\'t play with your food!')
// }
// juggleOranges()

// undefined and enums (and null)
// enum Brushable {
//   Teeth,
//   Hair = 1
// }
// function brush(brushSize: 'big' | 'small' | undefined, teethOrHair: Brushable) {
//   const brushable = teethOrHair === Brushable.Hair ? 'hair' : 'teeth';
//   const brushType = brushSize || (teethOrHair === Brushable.Teeth ? 'small' : 'big');
//   return `Today I will brush my ${brushable} with a ${brushType} brush`
// }
// console.log(brush(undefined, Brushable.Teeth))

// // Generics in functions
// function grabOne<T>(options: T[]): T {
//   return options[Math.floor(Math.random() * options.length)];
// }
// console.log(grabOne<TFruit>(fruitBowl))

// // Intersect Types
// function getFruitAndVegetables(): Array<TFruit | TVegetables> {
//   return [...fruitBowl, ...fruitAndVegetables]
// }
// console.log(getFruitAndVegetables)


// import * as moment from 'moment';
// import { IAnimal } from './animal';
// import Animal from './animal';
// import { Chicken, IBird } from './chicken';
//
// const chicken = new Chicken();
// console.log(chicken.speak());
// console.log(chicken.getInfo());
//
// const animalSpeakNow = <T extends IAnimal>(animal: Animal<T>) => {
//   console.log(`${animal.speak()} at ${moment().format('h:mm:ssa')}`);
// }
// animalSpeakNow(chicken);
//
// const chickenSpeakNow = <T extends IBird & {name: 'chicken'}>(animal: Animal<T>) => {
//   console.log(`${animal.speak()} at ${moment().format('h:mm:ssa')}`);
// }
// chickenSpeakNow(chicken);