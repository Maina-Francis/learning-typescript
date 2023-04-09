// const user = {
//   name: "John",
//   email: "james@example.com",
//   isActive: false,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// createUser({ name: "John", isPaid: true });

// // when a function returns an object
// function createCourse(): { name: string; price: number } {
//   return { name: "Typescript", price: 50 };
// }

// Type Aliases

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return { name: "", email: "", isActive: true };
}

createUser({ name: "", email: "", isActive: true });

export {};
