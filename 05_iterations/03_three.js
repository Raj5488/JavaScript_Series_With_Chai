//for of
[]
[{}, {}, {}]

let arr = [1,2,3,4,5]

// how to apply this loop in array 
for (const num of arr) {
    // console.log(num)
}

//for of loop we can apply String also..
const greeting = "Hello World!!";
for (const greet of greeting) {
    // console.log(`Each greet of ${greet}`)
}

// ------------------maps-------------
// maps always take unicq key value  hold karta hai jaisa ap denge wisa he arange karta hai aur repit value ko add nahi karta hai aur object me return karta hai

const mapss = new Map();
mapss.set("Ind", "india");
mapss.set("USA", "United State of America");
mapss.set("Fr", "France")
// console.log(mapss);


for (const [key, value] of mapss) {
    // console.log(key)
    console.log(key, ":->", value)
}



// how to apply forOf loop in object
const myObject ={
    Game1:"NFS",
    Game2:"PubG",
    Game3: "Spidarman"
}
// In object is not iterable in forOf loop get error
for (const [key, value] of myObject) {
    console.log(key, ":->",  value)
}
