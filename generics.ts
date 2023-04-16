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
