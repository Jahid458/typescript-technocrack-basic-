// mapped types

const arrayofNum: number[] = [1,4,6];

const arrayOfString:string[] = ["3", "5", "1"];


const arrayStringUsingMap:String[] = arrayofNum.map((num) => num.toString());

console.log(arrayStringUsingMap)


type AreaOfNum ={
    height: number;
    width:number
}

const user ={
     id:7788
}


user["id"]



type Height = AreaOfNum["height"]

// type AreaOfString = {
//     height: string, 
//     width: string
// }

type AreaOfString ={ 
    [key in "height" | "width"]:string
}
type Area<T> ={ 
    [key in keyof T]:T[key]

    // key >> height >> string
    // key >> height >> string
}

/*

T >>> {height: number, width: number}

{height: number, width: number}["width"]: number

*/

// "height" || "width"

const area1: Area<{height:string, width:boolean}> = {
    height:'40',
    width:false
}