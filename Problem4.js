
//  ==== Problem #4 ====
//  The accounting team needs all the years from every car on the lot. Execute a function that will return an array
//  from the dealer data containing only the car years and log the result in the console as it was returned.
import { inventory } from "./inventory.js"
export const car_years = (r) => {
    let a = []
    for (let i = 0; i < r.length; i++) {
        let year = r[i].car_year
        a.push(year)
    }
    console.log(a)
}
car_years(inventory)