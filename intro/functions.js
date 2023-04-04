"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // ensures that what ever is returned by the function is a number
    return num + 2;
}
addTwo(6);
function getUpper(value) {
    return value.toUpperCase();
}
//getUpper(5); //throws an error
// If the function takes more than 1 parameter
function employee(name, email, isPaid) { }
// default function parameters
var logInUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
logInUser("Franc", "franc@f.com"); //won't result in error because isPaid has a default value
// returning more than one type
// function getValue(value: number) {
//   if (value > 5) {
//     return true; //boolean
//   }
//   return "200 OK"; //string
// }
// arrow funcs
var getHello = function (str) {
    return "hello" + str;
};
var heros = ["Thor", "Superman", "Batman"];
heros.map(function (hero) {
    return "My hero is ".concat(hero);
});
// using void when the function isn't expected to return anything
function consoleError(errorMessage) {
    console.log(errorMessage);
}
// some functions never return a value
function handleError(errorMessage) {
    throw new Error(errorMessage);
}
