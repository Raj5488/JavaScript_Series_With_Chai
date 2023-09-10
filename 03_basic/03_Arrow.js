const user = {
    username: "JITU-KUMAR", 
    price: 1000000,
    welcomeMessage: function(){
        // current directory me access karne ke liye "this" ka use karte hai as like 
        console.log(`${this.username}, welcome to out websites`)
        // console.log(this)  // current variable ki bat krta hai
    }
}

// user.welcomeMessage();
// user.username = "RAJ-SHARMA";
// user.welcomeMessage()

// console.log(this)  // outp-> empty object but if we execute chrome then....


// const coffie = function (){
//     username: "RAJ"
//     console.log(this.username)  // if we execute in function then print "this" we got undefied

//     // console.log(this)    // a lot of information output
// }
// coffie();





    const coffie = () => {
    username: "RAJ"
    console.log(this.username); 
    console.log(this); 
}
// coffie();






// ++++++++++++++++ARROW FUNCTION+++++++++++++

// const addTwo = (num1, num2) =>{
//     return num1 + num2; 
// }
// console.log(addTwo(50,60))



// ++++IMPLICIT RETURN+++++

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2); 

// const addTwo = (num1, num2) => {username: "Jitu_kumar"}  // output-> undefiend // we can not pass object directly


const addTwo = (num1, num2) => ({username: "Jitu_kumar"})// output-> currect





console.log(addTwo(50,60))

