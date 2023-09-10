// If

// if(true){
// // in this scope value will executed
// }

// if(false){
//     // in this scope value will not executed
// }



// let score = 200;
// if(score > 100){
//     let power = "flying"  // agr let ke jaga 'var' use karte to outside me print ho jata
//     console.log(`User Power ${power}`)
// }
// console.log(`User Power ${power}`)


//++++++++++IMPLICT SCOPE+++++++++++
const balanced = 5000;
// if(balanced > 1000) console.log("Tested"),console.log("Tested Two")            ///DON'T DO THAT SMART




// if(balanced > 2000){
//     console.log("Less than 5000")
// } else if(balanced < 2500){
//     console.log("Less than 2500")
// }
// else {
//     console.log("Nothing doing")
// }



const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to purchase T-Shirt");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged in")
}
