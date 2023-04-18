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
