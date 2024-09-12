// import {add,subtract,multiply,divide} from './math.js'
// console.log(add(2,3))

// console.log(subtract(2,3))

// console.log(multiply(2,3))

// console.log(divide(2,3))


// Advanced ES6


// 1.Arrow functions
// Regular function
// function add (a,b){
//     return a+b
// }

// // Arrow function
// const add =(a,b)=>{
//     return a+b
// }


// 2. Regular vs anonymous functions
// regular function
// function add (a,b){
//     return a+b
// }
// // function using anonymous function
// const add = function(a,b){
//     return a+b
// }


// 3.Const,let,template literals


// 4.Single statement functions
// const add = (a,b) => a+b
// console.log(add(5,10))


// 5. Ternary operators (similar to if-else)
// const age = 26
// // let type = null
// // // create an if else to check if this age = adult or minor 
// // if(age >= 18){
// //      type = "adult"
// // }else {
// //      type = "minor"
// // }
// let type = age>18? "adult":"minor"
// console.log(type)


// 6. Destructuring
// Used when we want to extract one or more properties from an array or object

// 6a.Destructuring arrays

// const cars = ["BMW","Proton","Toyota","Tesla"]
// const firstCar = cars[0];
// const thirdCar =cars[2];
// const [firstCar,secondCar , thirdCar,fourthCar]= cars
// console.log("first car is",firstCar)
// console.log("second car is",secondCar)
// console.log("third car is",thirdCar)
// console.log("fourth car is",fourthCar)

// Challenge: use one console.log() and print out each car + it's corresponding answer


// 6b. Destructuring objects

// const gameCharacter = {
//     name: "mario",
//     brother:"luigi",
//     occupation:"professional plumber",
//     age:27,
//     hasWife: false
// }
// //  extract 'name' and 'age' properties from the 'gameCharacter' object
// const {name, age}=gameCharacter
// console.log(name)
// console.log(age)


// 7.Spread operators
// const fruits = ["banana","apple","orange"]
// const newfruits = [...fruits,"grape","kiwi"]
// console.log(newfruits)

// 8. Rest parameter 
function sumTotal(...numbers){
    console.log(numbers)
    // calculate the sumtotal by looping through the numbers array and adding each item
    let total = 0;
    for (let number of numbers){
            total = total + number
        }
    console.log(total)
    }
sumTotal(1,2,3,4,5,6)
sumTotal(8,9,10)
