// Immediately Invoked Function Expressions (IIFE);

// 1) Jo function imediately execute ho jaye !!
// 2) Global scope ke polution se problem hoti hai kai bar global scope ke variable ya declared hai ush polution ko hatene ke liye use karte hai


(function Coffie(){
    // this function is 'name iife' hai
    console.log("DATABASE CONNETED");
// here is very important to get semicolums to end  other wise next function can not executed  
})();


// ++++++++++++++

// ( () => {
//     console.log("DATABASE CONNETED");
// })()



( (name) => {
    // without name iife
    console.log(`DATABASE CONNETED ${name}`);
})("Jitu")

