
// ==== Problem #6 ====
//  A buyer is interested in seeing only BMW and Audi cars within the inventory.
//   Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, 
//   use JSON.stringify() to show the results of the array in the console.
import { inventory } from "./inventory.js"
export const BMW_Audi = (r) => {
    let a = []
    for (let i = 0; i < r.length; i++) {
        let car = r[i].car_make
        if (car === "BMW" || car === "Audi") {
            a.push(r[i])
        }

    }
    console.log(a)

    console.log(JSON.stringify(a))
}
BMW_Audi(inventory)