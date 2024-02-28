console.log(2>1);
console.log(2>=1);
console.log(2==1);
console.log(2!=1);
console.log(2<1);
console.log(2<=1);

//Try to avoid these type of comparisons.
console.log("2">1);
console.log("02">=1);

console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true
//The reason is that an equality check and comparisons work differently.
//Comparisons convert null to a number treating it as 0

// console.log(undefinrd==0);
// console.log(undefined>=0);
// console.log(undefined<=0);
// console.log(undefined>0);
// console.log(undefined<0);
//=== : strictly equal to
console.log("2"==2);//returns true as conversion from a string to a number takes place.
console.log("2"===2);//returns false as conversion does not take place and datatypes are not same.