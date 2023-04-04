function addTwo(num: number): number {
  // ensures that what ever is returned by the function is a number
  return num + 2;
}

addTwo(6);

function getUpper(value: string) {
  return value.toUpperCase();
}

//getUpper(5); //throws an error

// If the function takes more than 1 parameter
function employee(name: string, email: string, isPaid: boolean) {}

// default function parameters
let logInUser = (name: string, email: string, isPaid: boolean = false) => {};

logInUser("Franc", "franc@f.com"); //won't result in error because isPaid has a default value

// returning more than one type
// function getValue(value: number) {
//   if (value > 5) {
//     return true; //boolean
//   }
//   return "200 OK"; //string
// }

// arrow funcs
const getHello = (str: string): string => {
  return "hello" + str;
};

const heros = ["Thor", "Superman", "Batman"];

heros.map((hero): string => {
  return `My hero is ${hero}`;
});

// using void when the function isn't expected to return anything

function consoleError(errorMessage: string): void {
  console.log(errorMessage);
}

// some functions never return a value
function handleError(errorMessage: string): never {
  throw new Error(errorMessage);
}

export {};
