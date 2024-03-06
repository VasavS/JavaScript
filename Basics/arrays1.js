//Arrays in JavaScript.
const myArr = [0,1,2,3,4,5];//Array can contain values of different types.
console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);
console.log(myArr[3]);
console.log(myArr[4]);
console.log(myArr[5]);
//Mix data types.
//In JavaScript the arrays are resizable and can contain values of different data types.
//JavaScript arrays are not associative arrays.Elements cannot be accessed using arbitrary strings as indexes.Instead we use non-negative numbers as indexes.
//JavaScript arrays are 0 indexed.Array copy operations create shallow copies.

//Some other ways of declaring arrays in JavaScript.
const arr = new Array(0,1,2,3,4,5);//new keyword creates a new array.
console.log(arr);
//Array Methods in JavaScript.
myArr.push(6);//Adds element to the end of the array.
console.log(myArr);
myArr.push(7);
console.log(myArr);
myArr.pop();//Removes element from the end of an array.
console.log(myArr);
myArr.pop();
console.log(myArr);
//Push operation requires a parameter whereas pop operation requires no parameters.

//Shift and Unshift operations on arrays.
myArr.unshift(0);//Adds element to the front of the array.
console.log(myArr);
myArr.unshift(9);
console.log(myArr);
myArr.shift();
console.log(myArr);
myArr.shift();
console.log(myArr);
//Unshift operation requires a parameter whereas shift operation requires no parameter.

//Some Basic operations on Javacript arrays.
console.log(myArr.includes(9));//Returns a boolean value: true if element is present in the array and false otherwise.
console.log(myArr.indexOf(9));//Returns the index of the element if element is present in the array and -1 otherwise.
console.log(myArr.includes(3));
console.log(myArr.indexOf(3));

//Converting array into a string.
//We use the join method.
const newArr = myArr.join();//Converts the given array into a string.
console.log(myArr);
console.log(newArr);
console.log(typeof myArr);//In JavaScript an array is an object.
console.log(typeof newArr);

//Slice and Splice methods in JavaScript.
console.log("A",myArr);
const myn1 = myArr.slice(1,3);//Extracts the array value for indexes 1 and 2.
console.log(myn1);
console.log("B",myArr);
const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C",myArr);
//JavaScript Arrays are Objects. So we can have elements of various types in an array.
//JavaScript Arrays can contain variables of different datatypes within the same array.
//JavaScript Arrays can contain objects,functions and even arrays.

const a = [1,5,7,4,3,2,9,8,6];
//length() method is used to get the length of an array.
//sort() method is used to sort an array.
console.log(a.length);
a.sort();
console.log(a);

const fruits = ["Banana","Apple","Orange"];
console.log(fruits);
fruits[fruits.length] = "Lemon";
console.log(fruits);
//Adding elements at higher indexes can create undefined holes in JavaScript.
console.log(Array.isArray(fruits));//Used to check whether it is truly an array.
