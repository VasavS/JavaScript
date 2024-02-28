let score = "33abc"
console.log(typeof score);
console.log(typeof(score));
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);//Not A Number.
let temp = null
console.log(typeof temp);//object
console.log(typeof(temp));//object
let tempInNumber = Number(temp)
console.log(typeof tempInNumber);//number
console.log(tempInNumber);//0
let ans = true
console.log(typeof ans);//boolean
console.log(typeof(ans));//boolean
let ansInNumber = Number(ans);
console.log(typeof ansInNumber);//number
console.log(ansInNumber);//1
let name = "Hitesh"
console.log(typeof name);//string
console.log(typeof(name));//string
let nameInNumber = Number(name);
console.log(typeof nameInNumber);//number
console.log(nameInNumber);//Not a Number
let val = undefined
console.log(typeof val);//undefined
console.log(typeof(val));//undefined
let valInNumber = Number(val)
console.log(typeof valInNumber);//number
console.log(valInNumber);//Not a Number
//33 => 33
//"33abc"=>NaN
//true=>1;false=>0
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);//Boolean
console.log(booleanIsLoggedIn);//true
let log = "Hitesh"
let booloeanLog = Boolean(log)
//console.log(typeof booleanLog);
//console.log(booleanLog);
//1=>true;0=>false
//""=>false : empty string
//"Hitesh"=>true
let someNumber = 33;
let stringNumber = String(someNumber)
console.log(typeof stringNumber);//String
console.log(stringNumber);//33