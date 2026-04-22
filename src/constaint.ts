//constraint => rules dewa ba strict rules dewa 


//kon  student just haswatch ase khali name id eigulo must thakbe eitai constraint 
// (rule set dewa constaint)
type  Student ={id:number,name:string,dateOfBirth:string,class: string}

const addStudentInfo  = <T extends Student>( StudentInfo: T ) => {
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
const st3 = {
    id:789,
    name:'jamal',
    hasWatch:true,
    dateOfBirth:'20-2-2005',
    class: '1'
}

const res1 = addStudentInfo(st3) 
console.log(res1)
