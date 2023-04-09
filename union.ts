let age: string | number;

age = 50;
age = "50";

type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let francis: User | Admin = {
  name: "Francis",
  id: 4,
};

// working with arrays
const data: number[] = [1, 2, 3, 4, 5];

const data1: string[] = ["1", "2", "3", "4", "5"];

//an array of numbers, strings and booleans:
const data2: (number | string | boolean)[] = [1, 2, "3", "4", false];

// Allow some values to be very strict, like constants
let carTransmission: "automatic" | "manual";
carTransmission = "automatic";
carTransmission = "manual";
// carTransmission = "hybrid"//will result in error
