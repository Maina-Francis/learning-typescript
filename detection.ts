function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val * 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide id");
    return;
  }
  id.toLowerCase();
}

// "in". operator narrowing
interface Client {
  name: string;
  email: string;
}

interface Administrator {
  name: string;
  email: string;
  isAdmin: boolean;
}

function getAdmin(account: Client | Administrator) {
  if ("isAdmin" in account) {
    // Verifies is admin
    return account.isAdmin;
  }
}

// Example 2

interface Student {
  name: string;
  subject: string;
}

interface Teacher {
  name: string;
  subject: string;
  classTeacher: boolean;
}

function isTeacher(user: Student | Teacher) {
  if ("classTeacher" in user) {
    console.log("Is a teacher");
    return user.classTeacher;
  }
  console.log("Is not a teacher");
}

let Mary: Teacher = {
  name: "Mary",
  subject: "Science",
  classTeacher: true,
};
let John: Student = {
  name: "John",
  subject: "Science",
};

isTeacher(Mary);

// instanceof narrowing
// Checks whether a variable of a parameter, is an instance of a certain class

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.getFullYear());
  } else {
    console.log(x.toUpperCase());
  }
}

let today = new Date();
logValue(today);

// Type Predicates
type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

// Discriminated Unions
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

function getArea(shape: Circle | Square) {
  if (shape.kind === "circle") {
    return shape.radius * Math.PI ** 2;
  }
  shape.side ** 2;
}

// Exhaustiveness Checking using switch statements
type Shape = Circle | Square | Rectangle;
function shapeArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return shape.radius * Math.PI ** 2;

    case "square":
      return shape.side ** 2;

    case "rectangle":
      return shape.length * shape.width;

    default:
      const defaultforshape: never = shape;
      return defaultforshape;
  }
}
