type User = {
  name: string;
  age: number;
};
//interface: object, array, function (objectt ype )
interface IUser {
  name: string;
  age: number;
}

type Role = {
  role: "admin" | "user";
};

type userWIthRole = User & Role; //type intersectio

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user1: userWIthRole = {
  name: "Mr. X",
  age: 60,
  role: "admin",
};

const user2: IUserWithRole = {
  name: "Mr. T",
  age: 89,
  role: "user",
};

//  prmitive data type we are not use interface

type Add = (num1: number, num2: number) => number;

interface IAdd {
  (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => num1 + num2;

type Freinds = string[];

interface Ifreinds {
  [index: number]: string;
}

const freinds: Ifreinds = ["A", "B", "C"];

//Array & funtion type alias use korte paro and object er khete interface or typeAlias use korte paro 

