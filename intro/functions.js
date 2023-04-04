function addTwo(num) {
    return num + 2;
}
addTwo(6);
function getUpper(value) {
    return value.toUpperCase();
}
getUpper(5); //throws an error
// If the function takes more than 1 parameter
function employee(name, email, isPaid) { }
// default function parameters
var logInUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
logInUser("Franc", "franc@f.com"); //won't result in error because isPaid has a default value
