// Types
export type TAnimal = 'bird' | 'mammal' | 'reptile' | 'amphibian' | 'fish';

export interface IAnimal {
  name: string,
  sound: string,
  age: number,
  type: TAnimal,
  body?: IBody
}

export interface IBody {
  numberOfLegs: number
}

// Using Generics and Abstract Classes
export default abstract class Animal<T extends IAnimal> {
  constructor(private animal: T){}

  public speak(): string {
    return `The ${this.animal.name} goes '${this.animal.sound}!'`;
  }

  // the Generic can be used pretty much anywhere in scope
  public getInfo(): T {
    return this.animal;
  }
}