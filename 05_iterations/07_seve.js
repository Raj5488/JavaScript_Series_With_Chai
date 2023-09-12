const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// let newNumbers = myNumbers.map( (num) => num + 10);
// const newNumbers = myNumbers.map( (num) => {return num + 10});
// console.log(newNumbers);


// ++++++++++++++++++ Channing+++++++++++
const newNums = myNumbers
                    .map((num) => num * 10)
                    .map((num) => num +10)
                    .filter((num) => num >= 40)
console.log(newNums);
