type TStringArray = string[]
let stringArray: TStringArray = ['cat', 'dog'];
// stringArray = [1]; // invalid
stringArray = []; // valid


// Type, Generics and Array vs []
type TArray<T> = T[];
// type TArray<T> = Array<T>;
let catArray: TArray<'cat'> = ['cat', 'cat', 'cat'];
// array = ['dog']; // invalid

// Union types
type TArrayOfStringsOrNumbers = Array<string | number>
let arrayOfStringsOrNumbers: TArrayOfStringsOrNumbers = [1, 'cat', 3]
type TOtherArrayOfStringsOrNumbers = (string | number)[]
let otherArrayOfStringsOrNumbers: TOtherArrayOfStringsOrNumbers = [1, 'cat', 3]


type TStringOrArrayOfNumbers = string | number[]
let stringOrArrayOfNumbers: TStringOrArrayOfNumbers = 'cat'
stringOrArrayOfNumbers = [1, 2, 3]
// stringOrArrayOfNumbers = [1, 'cat', 3] // invalid
// stringOrArrayOfNumbers = 5 // invalid


// Tuples and Arrays
type TArrayOfStringThenNumber = [string, number]
let arrayOfStringThenNumber: TArrayOfStringThenNumber = ['cat', 1, 3]
// arrayOfStringThenNumber = ['cat', 'cat', 3] // invalid


type TArrayOfStringOrNumberThenNumber = [string | number, number]
let arrayOfStringOrNumberThenNumber: TArrayOfStringOrNumberThenNumber = ['cat', 1, 3]
arrayOfStringOrNumberThenNumber = [1, 1, 3]
// arrayOfStringOrNumberThenNumber = [1, 'cat', 3] // invalid
// arrayOfStringOrNumberThenNumber = [1, {}, 3] // invalid


// type TStringOrNumber = number | string
