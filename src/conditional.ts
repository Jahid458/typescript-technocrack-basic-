

type A = null 
type B = undefined

type C = A extends number ? true : B extends undefined ? true : false ; 


type RichPeoplesVehicles = {
    bike: string,
    car: string,
    ship: string
}

type checkVehicle  <T> = T extends "bike" | "car" | "ship" ? true : false


type hasBike1 = checkVehicle <"tractor"> // false
type hasBike2 = checkVehicle <"car"> // true

