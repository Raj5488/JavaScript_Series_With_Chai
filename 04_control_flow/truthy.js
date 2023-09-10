// const userEmail = "Jiturajsharma8093@gamil.com"
// const userEmail = "J@gamil.com"
const userEmail = [];
// const userEmail = "";

if(userEmail){
    // console.log("Got user email")
}
else{
    // console.log("Don't have user email")
}


// If i have empty array then we can choose length property
if(userEmail.length === 0){
    console.log("Empty Array");
}

const emptyObject = {};
if(Object.keys(emptyObject).length === 0){
    console.log("Empty Object Checked")
}

// +++++++++++++++++INTERESTING+++++++++++++++
        // falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
        // Truthy Values
// true, "0", "false", "_", {}, function(){}


// +++++++++++++++++++++++++
// Nullish Coalescing Operator (??): null undefied
let val1;
val1 = 5 ?? 10
val1 = null ?? 10   // 10
val1 = undefined ?? 10  // 10
val1 = null ?? 50 ?? undefined   // jo pahle value mita wahi print
val1 = 50 ?? 10 ?? 50
console.log(val1);


// ++++++++++++++++++++TERNARY OPERATOR+++++++++++++++

    // condition ? true: false;

const icePrice = 100;
    (icePrice <= 50) ? console.log("Less than 80") : console.log("more than 80")