"use strict";
// Empty array of numbers
const score = [];
// Empty array of strings
const names = [];
// function accepts and returns a number/string
function identityOne(val) {
    return val;
}
// function accepts and returns any datatype **Not advisable to use***
function identityTwo(val) {
    return val;
}
// **** GENERICS *******
function identityThree(val) {
    return val;
}
identityThree(3);
identityThree("The");
// Shortcut
function identityFour(val) {
    return val;
}
identityFour(6);
// Generics in Arrays and Type Functions
function getSearchProduct(val) {
    // do some complex operations
    const myIndex = 4;
    return val[myIndex];
}
// arrow func
const getSearchProductOne = (val) => {
    return val[5];
};
// Generics classes
function anotherFunc(valueOne, valueTwo) {
    return {
        valueOne,
        valueTwo,
    };
}
function anotherFunction(valueOne, valueTwo, valueThree) {
    return { valueOne, valueTwo, valueThree };
}
console.log(anotherFunction("Hello", "World", {
    connection: "str",
    userName: "erNa",
    password: "94894gj",
    id: 5,
}));
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
