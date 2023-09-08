//+++++++++++++++ Array+++++++++++++++++++++

const myArr = [0,1,2,3,true, "Jitu"];
const Heros = ["nagraj","saktiman"];

const Arry2 = new Array(1, 2, 3, 4)
// console.log(Arry2)




// +++++++++++++++ARRAY METHODS++++++++++++++++++++++++++

// it is only push new aaray 
myArr.push(6);


//it is last remove value
myArr.pop();

//it is only insert first position
myArr.unshift(50)

// it is only remove first place
myArr.shift()
// console.log(myArr);


// console.log(myArr.includes(5))  // output boolean
// console.log(myArr.indexOf(4654)); // output-> answer will be -1 only
// console.log(myArr.indexOf(2)) // output -> answer placevalue

const newArry = myArr.join();
// console.log(myArr);
// console.log(newArry);
// console.log(typeof newArry )



//slice , splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);

console.log("B", myArr)


const myn2 = myArr.splice(1, 2);
console.log("C", myArr)
console.log(myn2);