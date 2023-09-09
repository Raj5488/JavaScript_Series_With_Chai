// outSide is called Global scope
var c = 5000;
let a = 100;
if(true){
// this is called scoped in this scope is called block scope
    let a = 20;
    // console.log("Enner Code ", a);
    const b = 50;
    // c = 60;
    var c = 60;
}
// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Jitu kumar";

    function two(){
        const website = "www.jiturajsharma.com";
        console.log(username)
    }
    // console.log(website);
    two();
}
one();




if(true){
    const username = "JITU-SHARMA";
    if(username==="JITU-SHARMA"){
        const gmail ="jiturajsharma8093@gmail.com"
        console.log(username + gmail);
    }
    // console.log(gmail);
}
// console.log(username)




// +++++++++++++++++++++++++++SOME POINTS++++++++++++++++

console.log(add(5));   // we execute any where easily
function addone(num){
    return num + 1;
}




// it is also function but but some time we called EXPRESSION
console.log(addTwo(20)) // we can not execute any where because it is hold on variable
const addTwo = function(num){
    return num +50;
}
 