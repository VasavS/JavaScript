//Date In JavaScript.
const myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())
console.log(myDate.toJSON())
console.log(myDate.toISOString())
console.log(myDate.toUTCString())
console.log(typeof myDate)//Date is an object in JavaScript
//In JavaScript the months start from 0 for January and go on to 11 for December.
const myCreatedDate = new Date(2024,0,5)
console.log(myCreatedDate.toLocaleString())
//Date and Time.
const myCreatedDateTime = new Date(2024,0,5,0,5)
console.log(myCreatedDateTime.toLocaleString())
//Taking Date as input in a more specific format.
let myCreatedDate1 = new Date("2024-01-14")
console.log(myCreatedDate1.toLocaleString())
let myCreatedDate2 = new Date("01-14-2024")
console.log(myCreatedDate2.toLocaleString())