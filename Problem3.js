
//  ==== Problem #3 ====
//  The marketing team wants the car models listed alphabetically on the website. Execute a function to 
// Sort all the car model names into alphabetical order and log the results in the console as it was returned.
import { inventory } from "./inventory.js"
export const car_models = (r) => {
    let a = []
    for (let i = 0; i < r.length; i++) {
        let model = r[i].car_model
        a.push(model)
    }
    a.sort()
    for (let i = 0; i < r.length; i++) {
        console.log(a[i])
    }
}
car_models(inventory)