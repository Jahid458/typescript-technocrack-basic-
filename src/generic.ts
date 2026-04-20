// dynamicaaly generealize: Generic

type GenericArray<T> = Array<T> //typescript parameter tai codebase T hisebe dey

// const freinds: String[] = ['Mr. X','Mr. Y','Mr. Z']
const freinds: GenericArray<string> = ['Mr. X','Mr. Y','Mr. Z']

// const rollNumber: number[] = [3, 5 ,11]
const rollNumber: GenericArray<number> = [3, 5 ,11]

// const isEligibleList: boolean[] = [true, false, true]
const isEligibleList: GenericArray<boolean> = [true, false, true]

const sqrFunc = (value:number) => {
    return value * value
}
//Array Generics
type Coordinates<X,Y> = [X,Y]

const coordinates1:Coordinates<number,number> = [20,30]
const coordinates2:Coordinates<string,string> = ['20','30']

type User = {name: string,age:number}


//Object Generics

const userList:GenericArray<User> = [
    {
        name: 'Mr. X',
        age: 54
    },
    {
        name: 'Mr. Y',
        age: 30
    }
]

