"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val * 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide id");
        return;
    }
    id.toLowerCase();
}
function getAdmin(account) {
    if ("isAdmin" in account) {
        // Verifies is admin
        return account.isAdmin;
    }
}
function isTeacher(user) {
    if ("classTeacher" in user) {
        console.log("Is a teacher");
        return user.classTeacher;
    }
    console.log("Is not a teacher");
}
let Mary = {
    name: "Mary",
    subject: "Science",
    classTeacher: true,
};
let John = {
    name: "John",
    subject: "Science",
};
isTeacher(Mary);
// instanceof narrowing
// Checks whether a variable of a parameter, is an instance of a certain class
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.getFullYear());
    }
    else {
        console.log(x.toUpperCase());
    }
}
let today = new Date();
logValue(today);
function isFish(animal) {
    return animal.swim !== undefined;
}
function getArea(shape) {
    if (shape.kind === "circle") {
        return shape.radius * Math.PI ** 2;
    }
    shape.side ** 2;
}
function shapeArea(shape) {
    switch (shape.kind) {
        case "circle":
            return shape.radius * Math.PI ** 2;
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const defaultforshape = shape;
            return defaultforshape;
    }
}
