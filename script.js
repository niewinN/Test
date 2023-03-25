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

let weightMark = 95
let tallMark = 1.88

let weightJohn = 85
let tallJohn = 1.76

let bmiMark = weightMark / tallMark ** 2
let bmiJohn = weightJohn / tallJohn ** 2
console.log(bmiMark, bmiJohn)

let markHigherBMI = bmiMark > bmiJohn

if (bmiMark > bmiJohn) {
	console.log(`Mark's BMI ${bmiMark} is higher than than John's ${bmiJohn}`)
} else {
	console.log(`John's BMI ${bmiJohn} is higher than than Mark's ${bmiMark}`)
}
