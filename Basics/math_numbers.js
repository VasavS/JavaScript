const score = 400
console.log(score)
const balance = new Number(100)
console.log(balance)//Explicitly tells us that the type is number.
console.log(balance.toString().length)//Converts the number to a string and then calculates the length of the string
console.log(balance.toFixed(2))//Returns a number with two zeroes after the decimal point.
const amount = new Number(500)
console.log(amount)
console.log(amount.toString().length)
console.log(amount.toFixed(5))

//Precision
const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3))
const otherNumber1 = 123.8966
console.log(otherNumber1.toPrecision(3))
const otherNumber2 = 1123.8966
console.log(otherNumber2.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString())//Separates zeroes with commas according to the US Standards
console.log(hundreds.toLocaleString("en-IN"))//Separates zeroes with commas according to a specific region.

//Maximum and Minimum Values
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)

//++++++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math)//An object
console.log(Math.abs(-4))//Returns the absolute value of a given number.
console.log(Math.round(4.6))//Rounds off to the nearest integral value
console.log(Math.round(4.3))//Rounds off to the nearest integral value.
console.log(Math.ceil(4.2))//Returns the ceiling value.
console.log(Math.floor(4.9))//Returns the floor value.
console.log(Math.min(3,4,8,5,13))//Returns the min value among the given integers.
console.log(Math.max(3,4,8,5,13))//Returns the max value among the given integers.
//Very Important : Use of Random
//Generating Random Numbers in JavaScript.
console.log(Math.random())//Generates a random number between 0 and 1.
//Now we want that the random number generated is more than 1.
console.log((Math.random()*10) + 1)
//An even better way to generate random numbers.This time the random number does not contain any decimal values.
console.log(Math.floor(Math.random()*10) + 1)
//Now we want to generate a random number within a given range of numbers.
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min)+min))//Generates a random number between 10 and 20.
