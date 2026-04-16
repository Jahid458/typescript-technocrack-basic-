// NonPrimitive type: Array Object

let bazarLIst: string[] = ["Milk", "Egg", "Bread"];

// bazarLIst.push(12);

let mixedBazar: (string | number | boolean)[] = ["Milk", 12, "Egg", "1"];

mixedBazar.push(true);

let coordiante: [number, number] = [20, 30];

// fixd length r tuple
let couple: [string, string] = ["Husband", "wife"];

let mezbaOrRoll: [string, number] = ["jahidul", 90];

mezbaOrRoll[1] = 45;

// REfrense Type: Object

// const user: {
//   org: "Sonali Bank Limited"; //Value type hisebe use hoi tai eta littereal type
//   firstName: string;
//   middleName?: string; //optional type
//   lastName: string;
//   isMarried: boolean;
// } = {
//   org: "Sonali Bank Limited",
//   firstName: "Md",
//   //   middleName: "Jahidul",
//   lastName: "Islam",
//   isMarried: false,
// };

// user.org = " dehs iy io ltd ";
// console.log(user);


const user: {
 readonly organization: String; //Value type hisebe use hoi tai eta Access MOdifer ( mane change kora jabe na )
  firstName: string;
  middleName?: string; //optional type
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Sonali Bank Limited",
  firstName: "Md",
  //   middleName: "Jahidul",
  lastName: "Islam",
  isMarried: false,
};

// user.organization = ""; readonly change kora jabe an 
console.log(user);
