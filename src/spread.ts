

const freinds = ['Rahim', 'kamal']

const schlFreinds = ["kamal","Jamil",'Mathui']


const clgFrnd = ['Jmila', 'Tahima', ]

// for Array
freinds.push(...schlFreinds)

// console.log(freinds)


// for Object 

const user = {name: 'Mejba', phoneNo: "017847654"}
const OtherInfo = {hobby: 'Outing', favouriteColor: "Black"}

const userInfo = {...user, ...OtherInfo}
// console.log(userInfo)


//  rest operafctor


const sendInvite = (...freinds: string[]) => {
    freinds.forEach((freind:String) => console.log(`Send Invitation to ${freind}`) )
}


sendInvite('pintu','chintu','Monu','jahid')
