type User = {
    id:number,
    name: {
        firstName:String,
        lastName: String,
    },
    gender: 'Male' | 'Female',
    conatctNo: String,
    address: {
        division : String,
        city: String
    }

}


const user1: User = {
    id: 123,
    name: {
        firstName: 'Jahid',
        lastName: 'Islam'
    },
    gender: "Male",
    conatctNo: '017733',
    address: {
        city: 'Chattogram',
        division: 'chattagram'
    }
}


const user2:User = {
    id: 123,
    name: {
        firstName: 'Mr.',
        lastName: 'Y'
    },
    gender: "Female",
    conatctNo: '017733',
    address: {
        city: 'Dhaka',
        division: 'Dhaka'
    }
}

type IsAdmin = true

const isAdmin: IsAdmin = true

type AddFunc = (num1:number, num2:number) => number;

const add:AddFunc = (num1, num2) => num1+ num2