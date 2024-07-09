
//  ==== Problem #5 ====
//  The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from
//  the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.
import { inventory } from "./inventory.js"
export const car_years = (r) => {
    let a = []
    for (let i = 0; i < r.length; i++) {
        let year = r[i].car_year
        if (year < 2000) {
            a.push(year)
        }

    }
    console.log(a)
    console.log(`${a.length} cars were made before 2000`)
}
car_years(inventory)