// 6a.Destructuring arrays
const cars = ["BMW","Proton","Toyota","Tesla"]
// const firstCar = cars[0];
// const thirdCar =cars[2];
// const [firstCar,secondCar , thirdCar,fourthCar]= cars

// console.log("first car is",firstCar)
// console.log("second car is",secondCar)
// console.log("third car is",thirdCar)
// console.log("fourth car is",fourthCar)

// Challenge: use one console.log() and print out each car + it's corresponding answer
let car1 = [];
for (let i = 0; i<cars.length; i++){
    car1 += `Car ${i+1} is ${cars[i]} \n`
}
console.log(car1)