function addTwo(num: number) {
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

export {};
