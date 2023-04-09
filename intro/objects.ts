// // const user = {
// //   name: "John",
// //   email: "james@example.com",
// //   isActive: false,
// // };

// // function createUser({ name: string, isPaid: boolean }) {}

// // createUser({ name: "John", isPaid: true });

// // // when a function returns an object
// // function createCourse(): { name: string; price: number } {
// //   return { name: "Typescript", price: 50 };
// // }

// // Type Aliases

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
// }

// createUser({ name: "", email: "", isActive: true });

// Use case of readonly and ?(option)
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

let myUser: User = {
  _id: "1234",
  name: "f",
  email: "f@gmail.com",
  isActive: false,
};

myUser.name = "m";
// myUser._id = "244"; //Can't reassign _id because it is read-only

type cardNumber = {
  cardNum: number;
};

type cardDate = {
  cardDate: string;
};

// making use of existing types
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};
