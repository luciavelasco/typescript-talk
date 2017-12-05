import Animal from './animal' // importing a default
import { IAnimal } from "./animal"; // importing a named declaration

export interface IBird extends IAnimal {
  type: 'bird'
}

// Passes in the Chicken interface, which extends the Animal interface
export class Bird extends Animal<IBird> {
  constructor(bird: IBird) {
    // You can force types
    super(bird)
  }
}
