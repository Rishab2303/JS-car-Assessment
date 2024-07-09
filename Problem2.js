
//  ==== Problem #2 ====
//  The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model 
//  of the last car in the inventory is?  Log the make and model into the console in the format of:
// "Last car is a *car make goes here* *car model goes here*"

import { inventory } from "./inventory.js"
export const Last_car = (a) => {
    let n = a.length - 1
    let car = a[n]
    console.log(`Last Car is a ${car.car_year} ${car.car_make} ${car.car_model} `)

}
Last_car(inventory);

