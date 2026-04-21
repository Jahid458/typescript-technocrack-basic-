//Generic funtion


// const createArrayWIthString = (value: String) => [value];
// const createArrayWIthNumber = (value: number) => [value];


// const creteArrayWithObject = (value: {id:number,name:string}) => {
//     return [value]
// }

const createArrayWithGeneric= <T> (value: T ) => {
    return [value]
}


const ArrString = createArrayWithGeneric("Apple");
const ArrNum = createArrayWithGeneric(908);
const arrObj = createArrayWithGeneric({
    id: 34,
    name: 'Next level'
})

//tuple 
const createArrayWithTuple = (params1:string, param2:string) => [params1,param2]


const createArrayWithTupleGebneric = <X,Y> (params1:X, params2:Y) => [params1,params2];


const res = createArrayWithTupleGebneric("Mezba", false)


const addStucentInfo  = <T>( StudentInfo: T) => {
    return {
        course: 'Next level Hero.... ',
        ...StudentInfo
    }
}

const st1 = {
    id:123,
    name: 'Jahid',
    hasPen: true
}
const st2 = {
    id:123,
    name: 'Amul Jidan',
    hasCar: true,
    isMarried: true
}

const res1 = addStucentInfo(st2) 
console.log(res1)