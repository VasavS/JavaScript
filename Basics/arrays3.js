//Some extra methods in JavaScript.
const marvel_heroes = ["thor","ironman","captainamerica"];
const dc_heroes = ["superman","flash","batman"];
console.log(marvel_heroes);
console.log(dc_heroes);
 marvel_heroes.push(dc_heroes);
 console.log(marvel_heroes);
 console.log(marvel_heroes[3]);
 console.log(marvel_heroes[3][1]);
 const marvel = ["captainmarvel","wanda"];
 const dc = ["wonderwoman","catwoman","supergirl"];

 //Using the concat operation to achieve the same result.
 const merge = marvel.concat(dc);
 console.log(marvel);
 console.log(dc);
 console.log(merge);

//Using spread operator: Take a water glass and drop it from some height so that it spreads into pieces.
const marvel_hero = ["thor","ironman","captainamerica"];
const dc_hero = ["superman","flash","batman"];
const all_heroes = [...marvel_hero,...dc_hero];
console.log(all_heroes);

//Using another method to achieve the same thing.
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity);
console.log(another_array);
console.log(real_another_array);

//Some other methods.
console.log(Array.isArray("Hitesh"));//Asks whether the parameter passed inside the parantheses is an array.
console.log(Array.from("Hitesh"));//Converts the entire value into an array, can be object,string etc.
console.log(Array.from({Array:"Hitesh"}));//Interesting and very important.

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));