const myObject = {
    js: "JavaScropt",
    cpp: "C_plush_plush",
    rb: "Rubby",
    swifty: "swifty by apple"
}
// in object we can try to operate use "forin"
for (const key in myObject ) {
    // console.log(key);
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}


// can i use forIn loop in array.....????
const programming = ["js", "cpp", "java", "Python"];
for (const key in programming) {
    // console.log(key)
    // console.log(programming[key])
}



// map iterable nahi hai ish part forin loop kam nahi krega 
const mapss = new Map();
mapss.set("Ind", "india");
mapss.set("USA", "United State of America");
mapss.set("Fr", "France")

for (const key in mapss) {
    // console.log(key) :-> not showing because forin loop nahi krta hai kam 
}