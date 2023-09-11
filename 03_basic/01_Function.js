
function myFun(){
    console.log("J")
    console.log("I")
    console.log("T")
    console.log("U")
}

// myFun()

function addTwoNum(num1, num2){
    console.log(num1 + num2)
}
// addTwoNum()  // output- NaN because you not put arguments

// addTwoNum(66,858)
// addTwoNum(66,"858")
// addTwoNum(6, "a")
// addTwoNum(6, null)

const result = addTwoNum(6,10);
console.log("results:->",result) // output-> undefied



function Multiply(num4, num5){
    // console.log("Code will be executed before return")
    return num4*num5;
    // console.log("No executed this")
}
const finalResult = Multiply(20,10)
// console.log("Result:->",finalResult)


function logInUserMessage(username = "Satyam"){
    // if(username === undefined){  
        if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}
// logInUserMessage("JITU"); // output-> print nahi hoga kyu ki return kiya hua hai print nahi
console.log(logInUserMessage("JITU"))
// console.log(logInUserMessage(""))
// console.log(logInUserMessage()) // output-> undefied


// +++++++++++++FIRST METHODS with the help of funciton insert in array++++

// function calculateCarrPrice(...num1){
//     return num1    
// }
// console.log(calculateCarrPrice(200, 300, 500, 700))



// ++++++++++++++++++SECOND METHODS++++++++++
// function calculateCarrPrice(val1, val2,...num1){
//     return num1    
// }
// console.log(calculateCarrPrice(200, 300, 500, 700))







// +++++++++anyother Object ko function me insert kar ke array me convert kar skte hai+++++++++++++++++++++++++++++++++++++++++++++
const user ={
    username: "JITU-KUMAR",
    price: 1999
}
//notedpoint:- if price name mistake then it gives undefined

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user)
handleObject({
    username: "RAJU",
    price: 6000
})



///////////IN FUNCTION CONVERT TO ARRAY
const myNewArray = [20, 34, 35,55,234,];
function returnSecondValue(getArray){
        return getArray[2]
}
console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([345,36,654,432,56]))