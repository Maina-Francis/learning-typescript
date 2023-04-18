// Empty array of numbers
const score: Array<number> = [];

// Empty array of strings
const names: Array<string> = [];

// function accepts and returns a number/string
function identityOne(val: number | string): number | string {
  return val;
}

// function accepts and returns any datatype **Not advisable to use***
function identityTwo(val: any): any {
  return val;
}

// **** GENERICS *******
function identityThree<Type>(val: Type): Type {
  return val;
}
identityThree(3);
identityThree("The");

// Shortcut
function identityFour<T>(val: T): T {
  return val;
}
identityFour(6);

// Generics in Arrays and Type Functions
function getSearchProduct<T>(val: T[]): T {
  // do some complex operations
  const myIndex = 4;
  return val[myIndex];
}

// arrow func
const getSearchProductOne = <T>(val: T[]): T => {
  return val[5];
};

// Generics classes
function anotherFunc<T, U>(valueOne: T, valueTwo: U): object {
  return {
    valueOne,
    valueTwo,
  };
}

interface Database {
  connection: string;
  userName: string;
  password: string;
  id: number;
}

function anotherFunction<T, U, V extends Database>(
  valueOne: T,
  valueTwo: U,
  valueThree: V
): object {
  return { valueOne, valueTwo, valueThree };
}

console.log(
  anotherFunction("Hello", "World", {
    connection: "str",
    userName: "erNa",
    password: "94894gj",
    id: 5,
  })
);

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
