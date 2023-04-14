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
var Users = /** @class */ (function () {
    function Users(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Nairobi";
    }
    return Users;
}());
var frank = new Users("f@f,com", "Frank");
frank.city;
