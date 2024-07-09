//  ==== Problem #1 ====
//  The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 
// 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log 
// in the format of:
// "Car 33 is a *car year goes here* *car make goes here* *car model goes here*"

//primtive function 
// function findcar(n) {

//     let car = inventory.find(function (element) {
//         return element.id === n
//     })
//     console.log(`Car 33 is a ${car.car_year} ${car.car_make} ${car.car_model} `)

// }
// Arrow function
import { inventory } from "./inventory.js"

export const findcar = (n, a) => {

    let car = a.find(function (element) {
        return element.id === n
    })
    console.log(`Car 33 is a ${car.car_year} ${car.car_make} ${car.car_model} `)

}


findcar(33, inventory)
