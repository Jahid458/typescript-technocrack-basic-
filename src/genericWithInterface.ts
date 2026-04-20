interface Developer<T,X=null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: String;
  };
  smartWatch: T;
  bike?:X
}

interface withoutBrandWatch  {
  heartBeat: string;
  stopWatch: boolean;
}

interface AppleWatch {
  heartBeat: string;
  callSupport: boolean;
  calculator: boolean;
  aiSupport: boolean;
}


//interface r moddhe generic use kroe 
const poorDeveloper: Developer<withoutBrandWatch,{model: 'Yamaha', engineCapacity: '200cc'}> = {
  name: "Mr. Poor",
  salary: 300,
  device: {
    brand: "Lenovo",
    model: "Lenovo",
    releasedYear: "2009",
  },
  smartWatch: {
    heartBeat: "510",
    stopWatch: true,
  },
};
const richDeveloper: Developer<AppleWatch> = {
  name: "Mr. Rich",
  salary: 300,
  device: {
    brand: "Hp",
    model: "X34",
    releasedYear: "2026",
  },
  smartWatch: {
    heartBeat: "510",
    callSupport: true,
    calculator: true,
    aiSupport: true,
  },
  bike:null
};
