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
  constructor(public email: string, public name: string) {}
}

const frank = new Users("f@f,com", "Frank");
frank.city;

export {};
