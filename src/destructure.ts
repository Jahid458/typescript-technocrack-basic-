// object destructuure 
const user = {
    id:345 ,
    name: {
        firstName: 'Md',
        middleName: 'Jahidul',
        lastName: 'ISlam'
    },
    gender: 'Male',
    favouriteColor: 'Black'
}

// name alias destry type use kora jabe na 
const {favouriteColor: myColor, name: {middleName}}  = user ; 

console.log(middleName)