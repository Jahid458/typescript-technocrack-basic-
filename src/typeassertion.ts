let anything:any

// typescript je oversure tpe jani eta asertion

anything = 'Mehh';

const kgToNumber = (input: string | number): string | number | undefined => {
    if(typeof input === 'number'){
        return input * 1000
    }else if(typeof  input === 'string'){
        const [value] = input.split(" ")
        return `Converted Into ${Number(value) * 1000}`
    }
}


const result1 = kgToNumber(2) as number //type assertion 
console.log({result1}) // eta sure hole type assertion use korbo ,, sure na hole assertion korbo na 
const result2 = kgToNumber('2 kg') 
console.log({result2})