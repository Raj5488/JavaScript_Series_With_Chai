
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

// const result = addTwoNum(6,10);
// console.log("results:->",result) // output-> undefied



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

