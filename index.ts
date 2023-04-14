// class Users {
//   email: string;
//   name: string;
//   private city: string = ""; //   private keyword makes the property inaccessible outside the class. Everything else is public

//   private city: string = "";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

// Professional way of writing it:
class Users {
  private city: string = "Nairobi";
  protected courseCount: number = 1;
  constructor(public email: string, public name: string) {}
}

const frank = new Users("f@f,com", "Frank");
// frank.city;

// inherit a class, but can't inherit private modifiers
class SubUser extends Users {
  isFamily: boolean = true;
  changeCourseCount() {
    this.courseCount = 4;
  }
}

// Access modifiers recap
// Private - Only accessible within the class
// Public - accessible from anywhere
// protected - accessible within the class and any class that inherits it but not outside those parameters
export {};
