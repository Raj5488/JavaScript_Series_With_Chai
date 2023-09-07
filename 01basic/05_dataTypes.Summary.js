/* There are two types of Datatypes */

// 1(primitive) :-> String, Number, Null, Boolean, Undefined, symbol, BigInt

const score = 100;
const scroeValue = 100.3;
const isLoggedIn = false;
const outsideTem = null;
let userEmail;





// //++++++++++++Symbol are used to Unique++++++++++++++
const id = Symbol('123');
const anotherId = Symbol('123')
// console.log(id===anotherId)




const BigNumber = 123456789654321n;




// 2(Non Primitive) :-> Arrays, Objects, function
//notedPoint => All NonPritimitve Data is typesOf return "Object" but if we check function then function object
// Arrays
const heros =["Saktiman", "nagraj", "doga"];
//Object
let ObjectStore = {
    name:'Jituraj sharma',
    age: 25
}

// function
const myFun = function(){
    console.log("Hello World!!")
}

// console.log(typeof(myFun))  // outPut-> function and is called 'object function"
// console.log(typeof (anotherId))



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                // MEMORAY
    // 1)Stack (Primitive),  2)Heap(Non-primitive)

    let myName = "Jiturajsharma";
    let anotherName = myName;
    anotherName = "I.N.D.I.A";

    // console.log(myName);
    // console.log(anotherName);


    const userOne = {
        name:"jiturajsharma",
        gmail: "jiturajsharma@google.com"
    }
    let userTwo = userOne;
    userTwo.gmail = "mitu@google.com"
    console.log(userOne);
    console.log(userTwo);