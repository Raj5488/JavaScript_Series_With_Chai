const marvel_heros = ["thor",true, "Ironman", "Spidorman"];
const dc_heros = ["SuperMan", "flesh", "Saktiman"];

    // wrong methods to use two array

// marvel_heros.push(dc_heros);
// console.log(marvel_heros[3][1]);   //WRONG way to use


// ++++++++Right way to add two arrays
const allHeroes = marvel_heros.concat(dc_heros);
// console.log(allHeroes)


//+++++++3rd Methods to add array is called SPREAD OPERATOR++++
const all_New_Array = [...marvel_heros,...dc_heros];
// console.log(all_New_Array)



// A lot of array in array then we can make one array help of them
const anotherArray = [1, 2, 3, [4, 5, 6],7,[6, 7, [4, 5]]];
const RealAnother = anotherArray.flat(Infinity);
// console.log(RealAnother)



// to chek specified array ?? and how to convert array
// console.log(Array.isArray("JITU-SHARMA"));
// console.log(Array.from("JITU-RAJ-SHARMA"))

console.log(Array.from({name:"JITU"}))  // nahi banne par EMPTY array deta hai




// ++++++Second_Methods to convert in Array form
const score1 = 100;
const score2 = 200;
const score3 = 300;
const score4 = 400;

console.log(Array.of(score1, score2, score3, score4))
