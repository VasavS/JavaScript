//Array Methods in JavaScript.
const fruits = ["Banana","Orange","Apple","Mango"];
console.log(fruits);
console.log("Length of the array :"+fruits.length);
//Converting an array into a string.
const str = fruits.join();
console.log(str);
console.log(typeof str);
fruits[0] = "Kiwi";//Changes the element at the first index of the array.
console.log(fruits);
//Deleting an element from an array.
delete fruits[0];
console.log(fruits);//Returns empty item at index = 0.
//Merging Arrays: concatenation.
//Concatenating arrays means joining arrays end to end.Use the concat() method.
const myGirls = ["Cecilie","Lone"];
const myBoys = ["Emil","Tobias","Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);
//Concat() method does not change the original arrays.
//The Concat() methods can take any number of array arguments.

//Merging three arrays:
const arr1 = ["Cecile","Lone"];
const arr2 = ["Emil","Tobias","Linus"];
const arr3 = ["Robin","Morgan"];
const children = arr1.concat(arr2,arr3);
console.log(children);
//The concat() method can also take string as arguments.
//Merging an array with values.
const boys = ["Emil","Tobias","Linus"];
const newBoys = boys.concat("Peter","David");
console.log(newBoys);

//copyWithin(): copies array elements to another position in an array.
const fruit = ["Banana","Orange","Apple","Mango"];
fruit.copyWithin(2,0);
console.log(fruit);
const fruits1 = ["Banana","Orange","Apple","Mango","Kiwi"];
fruits1.copyWithin(2,0,2);
console.log(fruits1);
//copyWithin(): overwrites the existing values,does not add items to the array,does not change the length of the array.
//Flattening an array.
const ar = [[1,2],[3,4],[5,6]];
const fr = ar.flat();
console.log(fr);

//Slice and Splice methods in an array.
//Splice method adds new elements to an array.
//Slice method slices out elements from an array.
const f = ["Banana","Orange","Apple","Mango"];
f.splice(2,0,"Lemon","Kiwi");//First parameter: defines the position where the new elements should be added and second position: defines the number of elements that should be removed.
//Splice method returns an array with deleted items.
console.log(f);
const f1 = ["Banana","Apple","Orange","Mango"];
f1.splice(2,2,"Lemon","Kiwi");//New elements are added at position 2 and 2 elements are removed from the array.
console.log(f1);
//Using splice to remove elements without leaving holes in the array.
const sp = f.splice(0,1);
console.log(sp);
console.log(f);
const months = ["January","February","March","April","May"];
const spliced = months.toSpliced(0,1);//This method does not change the original array.
console.log(spliced);
console.log(months);
const fruits2 = ["Banana","Orange","Apple","Mango","Kiwi"];
const slicedFruits = fruits2.slice(1);//Returns all fruits from index = 1.
console.log(slicedFruits);//Does not remove elements from the original array.
console.log(fruits2);