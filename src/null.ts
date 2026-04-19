const userTheme = "Green Theme"

const selectedTheme = userTheme ?? "Light Theme" // undefiend hisebe use kore ney 


console.log(selectedTheme)



const isAuthenticated = null
const resultTernary = isAuthenticated ? isAuthenticated : 'U ae guest'
const resultNullish = isAuthenticated ?? 'you are guest'


// console.log({resultTernary, resultNullish})


// optio;nal chaining


const User : {
    address: {
        city: string,
        town: String,
        postalCode?:string
    };
} = {
    address :{
        city: 'Dhaka',
        town: 'Banani'
    }
}

const postalCode = User?.address?.postalCode
console.log(postalCode)