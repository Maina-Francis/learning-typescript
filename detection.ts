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
