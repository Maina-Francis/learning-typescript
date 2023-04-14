class Users {
  email: string;
  name: string;
  city: string = "";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const frank = new Users("f@f,com", "Frank");

export {};
