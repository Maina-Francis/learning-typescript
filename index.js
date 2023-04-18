"use strict";
// class Users {
//   email: string;
//   name: string;
//   private city: string = ""; //   private keyword makes the property inaccessible outside the class. Everything else is public
Object.defineProperty(exports, "__esModule", { value: true });
//   private city: string = "";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// Professional way of writing it:
class Users {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Nairobi";
        this.courseCount = 1;
    }
}
const frank = new Users("f@f,com", "Frank");
// frank.city;
// inherit a class, but can't inherit private modifiers
class SubUser extends Users {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this.courseCount = 4;
    }
}
