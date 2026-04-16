

function addNormal(num1:number, num2:number): number{
    return num1 + num2
}

addNormal(3 , 90)

const addArrow = (num1:number,num2:number) => num1 + num2 


//  object => function => method

const poorUser = {
    name: 'Jahid',
    balance: 90,
    addBalance(value: number): number{
        const totalBalance = this.balance + value
        return totalBalance
    }
}

poorUser.addBalance(100000)


// callback function

const arr:number[] = [1, 4 ,5]

const sqrArr = arr.map( (elem:number):number => elem*elem)

console.log(sqrArr)