import Animal from './animal' // importing a default
import { IAnimal } from "./animal"; // importing a named declaration

export interface IChicken extends IAnimal {
}

// Passes in the Chicken interface, which extends the Animal interface
export class Chicken extends Animal<IChicken> {
  constructor() {
    // You can force types
    super({
      name: 'chicken',
      sound: 'cluck',
      age: 2,
      type: 'bird'
    });
    // } as IChicken);
  }
}
