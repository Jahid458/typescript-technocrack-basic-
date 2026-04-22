// Utility types 


type Product = {
    id:number;
    name:string;
    price: string;
    stock :number;
    color?:string
}

type ProductSummary = Pick<Product, 'id'|'name'|'price'> //kichu jinish chai oigula nilam 

// jegul info dorkar neji ommit kore dibo 

type ProductWithOutStock = Omit<Product,'stock' | 'color'>

type ProductWithColor = Required<Product> //All property needed 

const product:ProductWithColor = {
    id: 344,
     name:"kamal",
    price: '65',
    stock :200,
    color:"Red"
}


//All information partial
type optionalProduct = Partial<Product>;
type ProductReadOnly = Readonly<Product>


const emphtyObject:Record<string,unknown> = {} // kono karone wmphty object declare korte hoi 

const Product1 = {
    id:455,
    name: "Mouse",
    Price: "389"
}

