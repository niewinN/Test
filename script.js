/*
let js = "cool"

console.log(40 + 8 + 23 - 10)

console.log("joans")

let country = "Poland"
let continent = "Europa"
let population = 38000000

console.log(country)
console.log(continent)
console.log(population)
*/

// let weightMark = 95
// let tallMark = 1.88

// let weightJohn = 85
// let tallJohn = 1.76

// let bmiMark = weightMark / tallMark ** 2
// let bmiJohn = weightJohn / tallJohn ** 2
// console.log(bmiMark, bmiJohn)

// let markHigherBMI = bmiMark > bmiJohn

// if (bmiMark > bmiJohn) {
// 	console.log(`Mark's BMI ${bmiMark} is higher than than John's ${bmiJohn}`)
// } else {
// 	console.log(`John's BMI ${bmiJohn} is higher than than Mark's ${bmiMark}`)
// }

// const dolphinsAvg = (109 + 945 + 123) / 3
// const koalasAvg = (109 + 945 + 123) / 3

// if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
// 	console.log(`Dolphins won with ${dolphinsAvg} points`)
// } else if (
// 	dolphinsAvg === koalasAvg &&
// 	dolphinsAvg >= 100 &&
// 	koalasAvg >= 100
// ) {
// 	console.log(`Draw`)
// } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
// 	console.log(`Koalas won with ${koalasAvg} points`)
// } else {
// 	console.log(`No one wins`)
// }

// const value = 275
// const tip = 0.15 * value
// const tip2 = 0.2 * value

// if (value > 50 && value < 300) {
// 	console.log(
// 		`The bill was ${value}, the tip was ${tip}, and the total value ${
// 			value + tip
// 		}`
// 	)
// } else {
// 	console.log(
// 		`The bill was ${value}, the tip was ${tip2}, and the total value ${
// 			value + tip2
// 		}`
// 	)
// }

const bill = 430
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
console.log(
	`The bill was ${bill}, the tip was ${tip}, the total value ${bill + tip}`
)

console.log(test)
