//singleton
// Object.create

// object literal


//ek symbol lo aur use key me add karo aur print karo
const mySymbol = Symbol("key1");

const JsUser = {
    [mySymbol] : "mykey1",
    "Qualificaton": "Graduation",
    name: "JITU",
    age: 22,
    gmail: "jituraj@goog.com",
    isLoggedIn: false,
    location: "Gaya",
    latLogInDays: ["Monday", "Tuesday"]
}

// Two types of access of Objects
// console.log(JsUser.gmail);  // but this is not right way
// console.log(JsUser["location"]);
// console.log(JsUser.Qualificaton)
// console.log(JsUser[mySymbol])


JsUser.gmail = "miturajsharma@google.com";
// Object.freeze(JsUser);
JsUser.gmail = "jitu@google.com";
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello World");
}
// console.log(JsUser.greeting)
// console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())