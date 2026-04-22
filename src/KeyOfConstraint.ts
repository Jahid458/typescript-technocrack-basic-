// keyof: type operator

type richPeopleVechiles = {
  car: string;
  bike: string;
  cng: string;
};

type MyVechile1 = "bike" | "car" | "cng";
type MyVechile2 = keyof richPeopleVechiles;

const myVechile: MyVechile2 = "car";

// keyof constraint
const user = {
  id: "222",
  name: "JAHID HASAN",
  address: {
    city: "ctg",
  },
};

// const myNmae = user.id;
const myId = user["id"];
const myName = user["name"];
const address = user["address"];

console.log({ myId, myName, address });

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user4: User = {
  id: 222,
  name: "JAHID HASAN",
  address: {
    city: "ctg",
  },
};

const product = {
  brand: "HP",
};

const student2 = {
  id: 998,
  class: "four",
};

//  we are defining here  in type using generic
const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

const result = getPropertyFromObj(user4, "id");
console.log(result);

const result2 = getPropertyFromObj(product, "brand");
const result3 = getPropertyFromObj(student2, "id");
